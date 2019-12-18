const jwt = require('jsonwebtoken');
const fs = require("fs");
const { clientError } = require("../responses");
function getPrivateKey() {
    return new Promise((res, rej) => {
        fs.readFile(process.env.JWT_PRIVATE_KEY_PATH, (err, data) => {
            if(err) {
                rej(err);
            } else {
                res(data);
            }
        });
    })
}

function getPublicKey() {
    return new Promise((res, rej) => {
        fs.readFile(process.env.JWT_PRIVATE_KEY_PATH, (err, data) => {
            if(err) {
                rej(err);
            } else {
                res(data);
            }
        });
    })
}

const tokenService = {
    issueToken(req, res, next) {
        let username = res.locals.body.username || req.body.username;
        const password = res.locals.body.password || req.body.password;
        if(username && password) {
            const pk = await getPrivateKey();
            let token = jwt.sign({username}, pk, {
                expiresIn: "5m"
            });
            res.json({
                success: true,
                message: 'Authentication successful!',
                token: token
            });
        } else {
            clientError.badRequest(res);
        }
    },
    validateToken(req, res, next) {
        let token =
            req.headers['x-access-token'] || req.headers['authorization'];
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
