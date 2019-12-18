const sendResponse = require("./sendResponse")
const success = {
    ok(res, message) {
        sendResponse(res, 200, message || "OK");
    },
    created(res, message) {
        sendResponse(res, 201, message || "created");
    }
}

module.exports = success;