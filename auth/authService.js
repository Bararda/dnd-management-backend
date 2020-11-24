const jwt = require("jsonwebtoken");
const fs = require("fs");
const bcrypt = require("bcrypt");
const userService = require("../../services/user.service");
const { errorTypes } = require('../responses')

/**
 * gets the private key from a file in the system
 */
function getPrivateKey() {
    return new Promise((res, rej) => {
        //read from file because it could potentially be stored on an external drive
        fs.readFile(process.env.JWT_PRIVATE_KEY_PATH, (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        });
    });
}
/**
 * gets the public key from a file in the system
 */
function getPublicKey() {
    return new Promise((res, rej) => {
        //read from file because it could potentially be stored on an external drive
        fs.readFile(process.env.JWT_PUBLIC_KEY_PATH, (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        });
    });
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
    async login(body) {
        const username = body.username;
        const password = body.password;
        if (username && password) {
            const [user] = await userService.get({ username }); 
            if (user && await bcrypt.compare(password, user.password)) {
                const token = await authService.issueToken(user.user_id);

                return [token, user];
            } else {
                //unauthorized
                throw errorTypes.unauthorized;
            }
        } else {
            throw errorTypes.badRequest;
        }
    },
    /**
     * Issues a token for the validated userID
     * @param {Int} userID
     */
    async issueToken(userID) {
        const pk = await getPrivateKey();
        let token = jwt.sign({ userID }, pk, {
            expiresIn: process.env.JWT_LENGTH || "5m"
            // algorithm: 'RS512',
        });
        return {
            success: true,
            message: "Authentication successful!",
            token: token,
            expiresIn: process.env.JWT_LENGTH || "5m"
        };
    },
    /**
     * Validates a token
     * @param {Token} token the jwt to validate
     */
    validateToken(token) {
        return new Promise(async (res, rej) => {
            if (token.startsWith("Bearer ")) {
                // Remove Bearer from string
                token = token.slice(7, token.length);
            }
            let pk = await getPublicKey();
            jwt.verify(
                token,
                pk,
                {
                    expiresIn: process.env.JWT_LENGTH || "5m"
                    // algorithm: ['RS512'],
                },
                (err, decoded) => {
                    if (err) {
                        res(false);
                    } else {
                        res(decoded);
                    }
                }
            );
        });
    }
};

module.exports = authService;
