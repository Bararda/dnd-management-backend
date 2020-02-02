const { genericService } = require("../util");
const { componentTypeDb } = require("../db");
const componentTypeService = {
    get: genericService.get(componentTypeDb.get),
    update: genericService.update(componentTypeDb.update),
    create: genericService.create(componentTypeDb.create),
    remove: genericService.remove(componentTypeDb.remove),
}
module.exports = componentTypeService;