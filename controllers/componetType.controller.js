const { genericController } = require("../util");
const { componentTypeService } = require("../services")
const componentTypeController = {
    get: genericController.get(componentTypeService.get),
    post: genericController.post(componentTypeService.create),
    put: genericController.put(componentTypeService.update),
    remove: genericController.remove(componentTypeService.remove)
}
module.exports = componentTypeController;