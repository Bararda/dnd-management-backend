const userController = require("./user.controller");
const roleController = require("./role.controller");
const authController = require("./auth.controller");
const spellController = require("./spell.controller");
const schoolController = require("./school.controller");
const classController = require("./class.controller");
const componentTypeController = require("./componetType.controller");
const damageTypeController = require("./damageType.controller");
const classSpellController = require("./classSpell.controller");
const spellDamageTypeController = require("./spellDamageType.controller");
const spellComponentTypeController = require("./spellComponentType.controller");
const spellBookController = require("./spellBook.controller");
const spellBookSpellController = require("./spellBookSpell.controller");

module.exports = {
    userController,
    roleController,
    authController,
    spellController,
    spellBookController,
    spellBookSpellController,
    schoolController,
    classController,
    componentTypeController,
    damageTypeController,
    spellDamageTypeController,
    classSpellController,
    spellComponentTypeController
};