const sendResponse = require("./sendResponse");
const clientError = {
    badRequest(res, err) {
        sendResponse(res, 400, err || "Bad Request");
    },
    unauthorized(res, err) {
        sendResponse(res, 401, err || "Unauthorized");
    },
    forbidden(res, err) {
        sendResponse(res, 403, err || "Forbidden");
    },
    notFound(res, err) {
        sendResponse(res, 404, err || "Not Found");
    },
    methodNotAllowed(res, err) {
        sendResponse(res, 405, err || "Method Not Allowed");
    },
    proxyAuthentiationRequired(res, err) {
        sendResponse(res, 407, err || "Proxy Authentication Required");
    },
    preconditionFailed(res, err) {
        sendResponse(res, 412, err || "Precondition Failed");
    },
    tooManyRequests(res, err) {
        sendResponse(res, 429, err || "Too Many Requests");
    }
}
module.exports = clientError;