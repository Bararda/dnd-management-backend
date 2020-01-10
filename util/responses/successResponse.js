const sendResponse = require("./sendResponse")
const success = {
    ok(res, data) {
        sendResponse(res, 200, data || "OK");
    },
    created(res, message) {
        sendResponse(res, 201, message || "created");
    }
}

module.exports = success;