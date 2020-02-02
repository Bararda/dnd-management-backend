const { genericController } = require("../util");
const { schoolService } = require("../services")
const schoolController = {
    get: genericController.get(schoolService.get),
    post: genericController.post(schoolService.create),
    put: genericController.put(schoolService.update),
    remove: genericController.remove(schoolService.remove)
}
module.exports = schoolController;