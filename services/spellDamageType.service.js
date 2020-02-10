const { genericService } = require("../util");
const { spellDamageTypeDb } = require("../db");
const spellDamageTypeService = {
    get: genericService.get(spellDamageTypeDb.get),
    update: genericService.update(spellDamageTypeDb.update),
    create: genericService.create(spellDamageTypeDb.create),
    remove: genericService.remove(spellDamageTypeDb.remove),
}
module.exports = spellDamageTypeService;