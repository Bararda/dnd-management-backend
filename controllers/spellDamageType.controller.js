const { genericController } = require("../util");
const { spellDamageTypeService } = require("../services")
const spellDamageTypeController = {
    get: genericController.get(spellDamageTypeService.get),
    post: genericController.post(spellDamageTypeService.create),
    put: genericController.put(spellDamageTypeService.update),
    remove: genericController.remove(spellDamageTypeService.remove)
}
module.exports = spellDamageTypeController;