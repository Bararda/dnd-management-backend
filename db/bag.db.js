const { genericDb } = require("../util");
const tablename = "bags";

const bagDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = bagDb;
