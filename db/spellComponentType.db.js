const { genericDb } = require("../util");
const tablename = "spell_componenttypes";

const spellComponentTypeDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = spellComponentTypeDb;
