const { genericService } = require("../util");
const { spellComponentTypeDb } = require("../db");
const spellComponentTypeService = {
    get: genericService.get(spellComponentTypeDb.get),
    update: genericService.update(spellComponentTypeDb.update),
    create: genericService.create(spellComponentTypeDb.create),
    remove: genericService.remove(spellComponentTypeDb.remove),
}
module.exports = spellComponentTypeService;