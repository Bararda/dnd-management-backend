const { authService } = require("../util/auth");
const authController = {
    /**
     * logs the user into the system and sets the flag to validate the session
     */
    login: async (req, res, next) => {
        try {
            let body = res.locals.body || req.body;
            res.locals.data = await authService.login(body);
            req.session.valid = true;
            req.session.token = res.locals.data;
            next();
        } catch (e) {
            //authController.logout(res, res, next);
            next(e);
        }
    },
    /**
     * invalidates the session
     */
    logout: (req, res, next) => {
        // put a good way to invalidate the token here
        req.session.destroy(err => {
            if (err) next(err);
            else {
                res.locals.data = { success: true };
                next();
            };
        });
    },
    async reissueToken(req, res, next) {
        if (req.session.valid && req.session.token) {
            if (req.decoded.userID) {
                res.locals.data = await authService.issueToken(
                    req.decoded.userID
                );
                req.session.valid = true;
                req.session.token = res.locals.data;
                next();
            }
        } else {
            throw 400;
        }
    },
    async validateToken(req, res, next) {
        let token =
            req.headers["x-access-token"] || req.headers["authorization"];

        if (!token && req.session && req.session.token) {
            token = req.session.token.token;
        }
        if (token) {
            const response = await authService.validateToken(token);
            if (response) {
                req.decoded = response;
                next();
            } else {
                res.status(401);
                return res.json({
                    success: false,
                    message: "Token is not valid"
                });
            }
        } else {
            res.status(401);
            return res.json({
                success: false,
                message: "Auth Token not supplied"
            });
        }
    }
};
module.exports = authController;
