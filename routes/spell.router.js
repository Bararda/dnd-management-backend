const express = require("express");
const router = express.Router();
const { spellController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { authService } = require("../util/auth");

router.get("/", [authService.validateToken, spellController.get, genericResponse.get]);
router.put("/", [authService.validateToken, spellController.put, genericResponse.put]);
router.post("/", [authService.validateToken, spellController.post, genericResponse.post]);
router.delete("/", [authService.validateToken, spellController.remove, genericResponse.remove]);

module.exports = router;
