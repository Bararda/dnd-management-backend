const { genericService } = require("../util");
const { itemTagDb } = require("../db");
const itemTagService = {
    get: genericService.get(itemTagDb.get),
    update: genericService.update(itemTagDb.update),
    create: genericService.create(itemTagDb.create),
    remove: genericService.remove(itemTagDb.remove),
}
module.exports = itemTagService;