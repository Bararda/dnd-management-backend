const { genericService } = require("../util");
const { bagDb } = require("../db");
const bagService = {
    get: genericService.get(bagDb.get),
    update: genericService.update(bagDb.update),
    create: genericService.create(bagDb.create),
    remove: genericService.remove(bagDb.remove),
}
module.exports = bagService;