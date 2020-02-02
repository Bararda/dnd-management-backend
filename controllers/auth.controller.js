const { authService } = require("../util/auth");
const authController = {
    /**
     * logs the user into the system and sets the flag to validate the session
     */
    login: async (req, res, next) => {
        try {
            let body = res.locals.body || req.body;
            console.log(body);
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
            else next();
        });
    },
    async reissueToken(req, res, next) {
        if (await authService.validateToken()) {
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
        } else {
            throw 400;
        }
    }
};
module.exports = authController;
