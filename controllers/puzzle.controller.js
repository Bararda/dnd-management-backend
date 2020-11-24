const { genericController } = require("../util");
const { puzzleService } = require("../services")
const puzzleController = {
    get: genericController.get(puzzleService.get),
    post: genericController.post(puzzleService.create),
    put: genericController.put(puzzleService.update),
    remove: genericController.remove(puzzleService.reset)
}
module.exports = puzzleController;