const { genericDb } = require("../util");
const tablename = "tags";

const tagDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = tagDb;
