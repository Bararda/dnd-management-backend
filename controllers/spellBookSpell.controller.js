const { genericController } = require("../util");
const { spellBookSpellService } = require("../services")
const spellBookSpellController = {
    get: genericController.get(spellBookSpellService.get),
    post: genericController.post(spellBookSpellService.create),
    put: genericController.put(spellBookSpellService.update),
    remove: genericController.remove(spellBookSpellService.remove)
}
module.exports = spellBookSpellController;