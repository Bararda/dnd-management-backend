const { genericService } = require("../util");
const { schoolDb } = require("../db");
const schoolService = {
    get: genericService.get(schoolDb.get),
    update: genericService.update(schoolDb.update),
    create: genericService.create(schoolDb.create),
    remove: genericService.remove(schoolDb.remove),
}
module.exports = schoolService;