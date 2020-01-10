const successResponse = require("./successResponse")
const genericResponse = {
    get(req, res, next) {
        successResponse.ok(res, res.locals.data);
        next();
    },
    put(req, res, next) {
        successResponse.ok(res, res.locals.data);
        next();
    },
    post(req, res, next) {
        successResponse.created(res);
        next();
    },
    remove(req, res, next) {
        successResponse.ok(res, res.locals.data);
        next();
    }
}
module.exports = genericResponse;