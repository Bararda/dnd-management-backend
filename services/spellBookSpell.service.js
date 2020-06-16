const { genericService } = require("../util");
const { spellBookSpellDb } = require("../db");
const spellBookSpellService = {
    get: genericService.get(spellBookSpellDb.get),
    update: genericService.update(spellBookSpellDb.update),
    create: genericService.create(spellBookSpellDb.create),
    remove: genericService.remove(spellBookSpellDb.remove),
}
module.exports = spellBookSpellService;