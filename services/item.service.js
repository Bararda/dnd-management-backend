const { genericService } = require("../util");
const { itemDb } = require("../db");
const itemService = {
    get: genericService.get(itemDb.get),
    update: genericService.update(itemDb.update),
    create: genericService.create(itemDb.create),
    remove: genericService.remove(itemDb.remove),
}
module.exports = itemService;