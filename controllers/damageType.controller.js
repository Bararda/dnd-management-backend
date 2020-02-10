const { genericController } = require("../util");
const { damageTypeService } = require("../services")
const damageTypeController = {
    get: genericController.get(damageTypeService.get),
    post: genericController.post(damageTypeService.create),
    put: genericController.put(damageTypeService.update),
    remove: genericController.remove(damageTypeService.remove)
}
module.exports = damageTypeController;