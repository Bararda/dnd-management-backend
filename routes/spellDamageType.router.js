const express = require("express");
const router = express.Router();
const { spellDamageTypeController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, spellDamageTypeController.get, genericResponse.get]);
router.put("/", [authController.validateToken, spellDamageTypeController.put, genericResponse.put]);
router.post("/", [authController.validateToken, spellDamageTypeController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, spellDamageTypeController.remove, genericResponse.remove]);

module.exports = router;