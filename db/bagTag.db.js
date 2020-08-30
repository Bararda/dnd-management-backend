const { genericDb } = require("../util");
const tablename = "bagTags";

const bagTagDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = bagTagDb;
