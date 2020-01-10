const { genericService } = require("../util");
const { roleDb } = require("../db");
const roleService = {
    get: genericService.get(roleDb.get),
    update: genericService.update(roleDb.update),
    create: genericService.create(roleDb.create),
    remove: genericService.remove(roleDb.remove),
}
module.exports = roleService;