const { genericDb } = require("../util");
const tablename = "roles";

const roleDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = roleDb;
