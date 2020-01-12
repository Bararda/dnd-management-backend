const sendResponse = require("./sendResponse");
/**
 * defines the success reponses
 */
const success = {
    ok(res, data) {
        sendResponse(res, 200, data || "OK");
    },
    created(res, message) {
        sendResponse(res, 201, message || "created");
    }
}

module.exports = success;