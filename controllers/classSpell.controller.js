const { genericController } = require("../util");
const { classSpellService } = require("../services")
const classSpellController = {
    get: genericController.get(classSpellService.get),
    post: genericController.post(classSpellService.create),
    put: genericController.put(classSpellService.update),
    remove: genericController.remove(classSpellService.remove)
}
module.exports = classSpellController;