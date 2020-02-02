const { genericDb } = require("../util");
const tablename = "classes";

const classDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = classDb;
