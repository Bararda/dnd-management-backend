const { genericDb } = require("../util");
const tablename = "spell_book_spells";

const spellBookSpellDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = spellBookSpellDb;
