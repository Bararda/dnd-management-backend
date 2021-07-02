const successResponse = require("./successResponse");
/**
 * defines the default success response for each type of request
 */
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
        successResponse.created(res, res.locals.data);
        next();
    },
    remove(req, res, next) {
        successResponse.ok(res, res.locals.data);
        next();
    }
}
module.exports = genericResponse;