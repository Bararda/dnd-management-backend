const { genericService } = require("../util");
const { classSpellDb } = require("../db");
const classSpellService = {
    get: genericService.get(classSpellDb.get),
    update: genericService.update(classSpellDb.update),
    create: genericService.create(classSpellDb.create),
    remove: genericService.remove(classSpellDb.remove),
}
module.exports = classSpellService;