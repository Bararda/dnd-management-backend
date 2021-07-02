const express = require("express");
const router = express.Router();
const { spellBookController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, spellBookController.get, genericResponse.get]);
router.put("/", [authController.validateToken, spellBookController.put, genericResponse.put]);
router.post("/", [authController.validateToken, spellBookController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, spellBookController.remove, genericResponse.remove]);

module.exports = router;