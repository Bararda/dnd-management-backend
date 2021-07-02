const { genericController } = require("../util");
const { spellBookService } = require("../services")
const spellBookController = {
    get: genericController.getWithUser(spellBookService.get),
    post: genericController.postWithUser(spellBookService.create),
    put: genericController.putWithUser(spellBookService.update),
    remove: genericController.removeWithUser(spellBookService.remove)
}
module.exports = spellBookController;