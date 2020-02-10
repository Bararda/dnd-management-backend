const { genericController } = require("../util");
const { spellComponentTypeService } = require("../services")
const spellComponentTypeController = {
    get: genericController.get(spellComponentTypeService.get),
    post: genericController.post(spellComponentTypeService.create),
    put: genericController.put(spellComponentTypeService.update),
    remove: genericController.remove(spellComponentTypeService.remove)
}
module.exports = spellComponentTypeController;