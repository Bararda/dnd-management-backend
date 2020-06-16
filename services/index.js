const userService = require("./user.service");
const roleService = require("./role.service");
const spellService = require("./spell.service");
const schoolService = require("./school.service");
const classService = require("./class.service");
const componentTypeService = require("./componentType.service");
const damageTypeService = require("./damageType.service");
const classSpellService = require("./classSpell.service");
const spellDamageTypeService = require("./spellDamageType.service");
const spellComponentTypeService = require("./spellComponentType.service");
const spellBookService = require("./spellBook.service");
const spellBookSpellService = require("./spellBookSpell.service");

module.exports = {
    userService,
    roleService,
    spellService,
    spellBookService,
    spellBookSpellService,
    schoolService,
    classService,
    componentTypeService,
    damageTypeService,
    classSpellService,
    spellDamageTypeService,
    spellComponentTypeService
};
