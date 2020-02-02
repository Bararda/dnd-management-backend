const { genericService } = require("../util");
const { spellDb } = require("../db");
const spellService = {
    get: genericService.get(spellDb.get),
    update: genericService.update(spellDb.update),
    create: genericService.create(spellDb.create),
    remove: genericService.remove(spellDb.remove),
}
module.exports = spellService;