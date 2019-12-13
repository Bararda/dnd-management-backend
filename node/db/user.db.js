const { genericDb } = require("../util");
const tablename = "users";

const userDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = userDb;
