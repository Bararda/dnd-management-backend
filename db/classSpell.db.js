const { genericDb } = require("../util");
const tablename = "class_spells";

const classSpellDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = classSpellDb;
