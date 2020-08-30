const { genericController } = require("../util");
const { bagTagService } = require("../services")
const bagTagController = {
    get: genericController.get(bagTagService.get),
    post: genericController.post(bagTagService.create),
    put: genericController.put(bagTagService.update),
    remove: genericController.remove(bagTagService.remove)
}
module.exports = bagTagController;