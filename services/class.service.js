const { genericService } = require("../util");
const { classDb } = require("../db");
const classService = {
    get: genericService.get(classDb.get),
    update: genericService.update(classDb.update),
    create: genericService.create(classDb.create),
    remove: genericService.remove(classDb.remove),
}
module.exports = classService;