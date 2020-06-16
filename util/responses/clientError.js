const sendResponse = require("./sendResponse");
/**
 * Sends errors about the client request
 */
const clientError = {
    badRequest(res, err) {
        sendResponse(res, 400);
    },
    unauthorized(res, err) {
        sendResponse(res, 401);
    },
    forbidden(res, err) {
        sendResponse(res, 403);
    },
    notFound(res, err) {
        sendResponse(res, 404);
    },
    methodNotAllowed(res, err) {
        sendResponse(res, 405);
    },
    proxyAuthentiationRequired(res, err) {
        sendResponse(res, 407);
    },
    preconditionFailed(res, err) {
        sendResponse(res, 412);
    },
    tooManyRequests(res, err) {
        sendResponse(res, 429);
    },
}
module.exports = clientError;