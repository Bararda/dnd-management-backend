const { genericService } = require("../util");
const { userDb } = require("../db");

const userService = {
    get: genericService.get(userDb.get),
    update: genericService.get(userDb.update),
    create: genericService.get(userDb.create),
    remove: genericService.get(userDb.remove),
}
module.exports = userService;