const { genericService } = require("../util");
const { tagDb } = require("../db");
const tagService = {
    get: genericService.get(tagDb.get),
    update: genericService.update(tagDb.update),
    create: genericService.create(tagDb.create),
    remove: genericService.remove(tagDb.remove),
}
module.exports = tagService;