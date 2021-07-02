const sendResponse = require("./sendResponse");
/**
 * defines the success reponses
 */
const success = {
    ok(res, data) {
        sendResponse(res, 200, data);
    },
    created(res, message) {
        sendResponse(res, 201, message);
    }
}

module.exports = success;