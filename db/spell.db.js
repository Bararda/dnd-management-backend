const { genericDb } = require("../util");
const tablename = "spells";

const spellDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = spellDb;
