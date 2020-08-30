const { genericController } = require("../util");
const { itemService } = require("../services");
const usersFK = 'owner_id';

const itemController = {
    get: genericController.getWithUser(itemService.get, usersFK),
    post: genericController.postWithUser(itemService.create, usersFK),
    put: genericController.putWithUser(itemService.update, usersFK),
    remove: genericController.removeWithUser(itemService.remove, usersFK)
}
module.exports = itemController;