const { genericService } = require("../util");
const { damageTypeDb } = require("../db");
const damageTypeService = {
    get: genericService.get(damageTypeDb.get),
    update: genericService.update(damageTypeDb.update),
    create: genericService.create(damageTypeDb.create),
    remove: genericService.remove(damageTypeDb.remove),
}
module.exports = damageTypeService;