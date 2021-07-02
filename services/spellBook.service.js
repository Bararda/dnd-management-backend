const { genericService } = require("../util");
const { spellBookDb } = require("../db");
const spellBookService = {
    get: genericService.get(spellBookDb.get),
    update: genericService.update(spellBookDb.update),
    create: genericService.create(spellBookDb.create),
    remove: genericService.remove(spellBookDb.remove),
}
module.exports = spellBookService;