const { genericController } = require("../util");
const { tagService } = require("../services");

const tagController = {
    get: genericController.getWithUser(tagService.get),
    post: genericController.postWithUser(tagService.create),
    put: genericController.putWithUser(tagService.update),
    remove: genericController.removeWithUser(tagService.remove)
}
module.exports = tagController;