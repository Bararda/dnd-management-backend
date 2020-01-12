const jwt = require("jsonwebtoken");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { userService } = require("../../services");
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
        let username = body.username;
        const password = body.password;
        if (username && password) {
            let user = await userService.get({ username });
            user = user[0];
            if (await bcrypt.compare(password, user.password)) {
                const token = await authService.issueToken(user.user_id);
                return token;
            } else {
                //unauthorized
                throw 401;
            }
        } else {
            throw 400;
        }
    },
    /**
     * Issues a token for the validated userID
     * @param {Int} userID
     */
    async issueToken(userID) {
        const pk = await getPrivateKey();
        let token = jwt.sign({ userID }, pk, {
            expiresIn: process.env.JWT_LENGTH || "1h"
        });
        return {
            success: true,
            message: "Authentication successful!",
            token: token
        };
    },
    /**
     * Validates a token
     * @param {Request} req
     * @param {Response} res
     * @param {Next} next
     */
    async validateToken(req, res, next) {
        let token =
            req.headers["x-access-token"] || req.headers["authorization"];

        if (token) {
            if (token.startsWith("Bearer ")) {
                // Remove Bearer from string
                token = token.slice(7, token.length);
            }
            let pk = await getPublicKey();
            console.log(token);
            jwt.verify(token, pk, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Token is not valid"
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: "Auth token is not supplied"
            });
        }
    }
};

module.exports = authService;
