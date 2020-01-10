const { genericController } = require("../util");
const { userService } = require("../services")
const userController = {
    get: genericController.get(userService.get),
    post: genericController.post(userService.create),
    put: genericController.put(userService.update),
    remove: genericController.remove(userService.remove)
}
module.exports = userController;