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
module.exports = {
    userController,
    roleController,
    authController,
    spellController,
    schoolController,
    classController,
    componentTypeController,
    damageTypeController,
    spellDamageTypeController,
    classSpellController,
    spellComponentTypeController
};