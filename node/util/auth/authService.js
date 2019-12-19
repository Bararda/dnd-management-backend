const jwt = require('jsonwebtoken');
const fs = require("fs");
const { clientError } = require("../responses");
/**
 * gets the private key from a file in the system
 */
function getPrivateKey() {
    return new Promise((res, rej) => {
        //read from file because it could potentially be stored on an external drive
        fs.readFile(process.env.JWT_PRIVATE_KEY_PATH, (err, data) => {
            if(err) {
                rej(err);
            } else {
                res(data);
            }
        });
    })
}
/**
 * gets the public key from a file in the system
 */
function getPublicKey() {
    return new Promise((res, rej) => {
        //read from file because it could potentially be stored on an external drive
        fs.readFile(process.env.JWT_PUBLIC_KEY_PATH, (err, data) => {
            if(err) {
                rej(err);
            } else {
                res(data);
            }
        });
    })
}
/**
 * authenticates users and issues tokens
 */
const authService = {
    /**
     *  validates user logins and issues them a token
     * @param {Request} req 
     * @param {Response} res 
     * @param {Next} next 
     */
    login(req, res, next) {
        let username = res.locals.body.username || req.body.username;
        const password = res.locals.body.password || req.body.password;
        if(username && password) {
            //TODO validate username and password here
           this.issueToken(userID);
           next();
        } else {
            clientError.badRequest(res);
        }
    },
    /**
     * Issues a token for the validated userID
     * @param {Int} userID 
     */
    issueToken(userID) {
        const pk = await getPrivateKey();
        let token = jwt.sign({userID}, pk, {
            expiresIn: "30m"
        });
        res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
        });
    },
    /**
     * Validates a token
     * @param {Request} req 
     * @param {Response} res 
     * @param {Next} next 
     */
    validateToken(req, res, next) {
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        if (token) {
            let pk = await getPublicKey();
            jwt.verify(token, pk, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    }
};

module.exports = authService;