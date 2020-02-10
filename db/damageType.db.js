const { genericDb } = require("../util");
const tablename = "damagetypes";

const damageTypeDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = damageTypeDb;
