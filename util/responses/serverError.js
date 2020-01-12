const sendResponse = require("./sendResponse");
/**
 * Defines and sends the possible server errors
 */
const serverError = {
    internalServerError(res, err) {
        sendResponse(res, 500, "Internal Server Error");
    }
}
module.exports = serverError;