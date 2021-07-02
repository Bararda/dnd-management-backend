const express = require("express");
const router = express.Router();
const { puzzleController, authController } = require("../controllers");
const { genericController } = require("../util");
const { genericResponse } = require("../util/responses");

router.get("/runes", [authController.validateToken, puzzleController.get, genericResponse.get]);
router.put("/runes", [authController.validateToken, puzzleController.put, genericController.notify('rune-puzzle') ,genericResponse.put]);
router.delete("/runes", [authController.validateToken, puzzleController.remove, genericController.notify('rune-puzzle') ,genericResponse.put]);

module.exports = router;
