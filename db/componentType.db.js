const { genericDb } = require("../util");
const tablename = "componenttypes";

const componentTypeDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = componentTypeDb;
