const express = require("express");
const router = express.Router();

const importRouter = require("./import.router");
router.use("/import", importRouter);

const authRouter = require("./auth.router");
router.use("/auth", authRouter);

const userRouter = require("./user.router");
router.use("/users", userRouter);

const roleRouter = require("./role.router");
router.use("/roles", roleRouter);

const spellRouter = require("./spell.router");
router.use("/spells", spellRouter);

const schoolRouter = require("./school.router");
router.use("/schools", schoolRouter);

const classRouter = require("./class.router");
router.use("/classes", classRouter);

const componentTypeRouter = require("./componentType.router");
router.use("/componentTypes", componentTypeRouter);

const damageTypeRouter = require("./damageType.router");
router.use("/damageTypes", damageTypeRouter);

const classSpellRouter = require("./classSpell.router");
router.use("/classSpells", classSpellRouter);

const spellDamageTypeRouter = require("./spellDamageType.router");
router.use("/spellDamageTypes", spellDamageTypeRouter);

const spellComponentTypeRouter = require("./spellComponentType.router");
router.use("/spellComponentTypes", spellComponentTypeRouter);

const spellBookRouter = require("./spellBook.router");
router.use("/spellBooks", spellBookRouter);

const spellBookSpellRouter = require("./spellBookSpell.router");
router.use("/spellBookSpells", spellBookSpellRouter);

module.exports = router;
