const { genericController } = require("../util");
const { itemTagService } = require("../services")
const itemTagController = {
    get: genericController.get(itemTagService.get),
    post: genericController.post(itemTagService.create),
    put: genericController.put(itemTagService.update),
    remove: genericController.remove(itemTagService.remove)
}
module.exports = itemTagController;