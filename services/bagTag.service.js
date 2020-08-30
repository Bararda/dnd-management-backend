const { genericService } = require("../util");
const { bagTagDb } = require("../db");
const bagTagService = {
    get: genericService.get(bagTagDb.get),
    update: genericService.update(bagTagDb.update),
    create: genericService.create(bagTagDb.create),
    remove: genericService.remove(bagTagDb.remove),
}
module.exports = bagTagService;