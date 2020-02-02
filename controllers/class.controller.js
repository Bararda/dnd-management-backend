const { genericController } = require("../util");
const { classService } = require("../services")
const classController = {
    get: genericController.get(classService.get),
    post: genericController.post(classService.create),
    put: genericController.put(classService.update),
    remove: genericController.remove(classService.remove)
}
module.exports = classController;