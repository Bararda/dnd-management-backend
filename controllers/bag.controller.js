const { genericController } = require("../util");
const { bagService } = require("../services")
const usersFK = 'owner_id';

const bagController = {
    get: genericController.getWithUser(bagService.get, usersFK),
    post: genericController.postWithUser(bagService.create, usersFK),
    put: genericController.putWithUser(bagService.update, usersFK),
    remove: genericController.removeWithUser(bagService.remove, usersFK)
}
module.exports = bagController;