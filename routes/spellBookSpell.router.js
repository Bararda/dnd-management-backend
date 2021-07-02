const express = require("express");
const router = express.Router();
const { spellBookSpellController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { spellBookSpellValidator } = require('../validators');

router.get("/", [authController.validateToken, spellBookSpellValidator.validate, spellBookSpellController.get, genericResponse.get]);
router.put("/", [authController.validateToken, spellBookSpellValidator.validate, spellBookSpellController.put, genericResponse.put]);
router.post("/", [authController.validateToken, spellBookSpellValidator.validatePost, spellBookSpellController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, spellBookSpellValidator.validate, spellBookSpellController.remove, genericResponse.remove]);

module.exports = router;