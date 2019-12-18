const sendResponse = require("./sendResponse");
const serverError = {
    internalServerError(res, err) {
        sendResponse(res, 500, "Internal Server Error");
    }
}
module.exports = serverError;