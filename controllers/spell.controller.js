const { genericController } = require("../util");
const { spellService } = require("../services")
const spellController = {
    get: genericController.get(spellService.get),
    post: genericController.post(spellService.create),
    put: genericController.put(spellService.update),
    remove: genericController.remove(spellService.remove)
}
module.exports = spellController;