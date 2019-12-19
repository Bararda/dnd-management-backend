const { genericController } = require("../util");
const { roleService } = require("../services")
const roleController = {
    get: genericController.get(roleService.get),
    post: genericController.post(roleService.create),
    put: genericController.put(roleService.update),
    remove: genericController.remove(roleService.remove)
}
module.exports = roleController;