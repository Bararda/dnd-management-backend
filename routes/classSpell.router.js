const express = require("express");
const router = express.Router();
const { classSpellController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, classSpellController.get, genericResponse.get]);
router.put("/", [authController.validateToken, classSpellController.put, genericResponse.put]);
router.post("/", [authController.validateToken, classSpellController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, classSpellController.remove, genericResponse.remove]);

module.exports = router;