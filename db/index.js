const userDb = require("./user.db");
const roleDb = require("./role.db");
const spellDb = require("./spell.db");
const schoolDb = require("./school.db");
const classDb = require("./class.db");
const componentTypeDb = require("./componentType.db");
const damageTypeDb = require("./damageType.db");
const classSpellDb = require("./classSpell.db");
const spellDamageTypeDb = require("./spellDamageType.db");
const spellComponentTypeDb = require("./spellComponentType.db");
const spellBookDb = require("./spellBook.db");
const spellBookSpellDb = require("./spellBookSpell.db");

module.exports = {
    userDb,
    roleDb,
    spellDb,
    spellBookDb,
    schoolDb,
    classDb,
    componentTypeDb,
    damageTypeDb,
    spellDamageTypeDb,
    classSpellDb,
    spellComponentTypeDb,
    spellBookSpellDb,
};