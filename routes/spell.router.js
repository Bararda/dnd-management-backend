const express = require("express");
const router = express.Router();
const { spellController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, spellController.get, genericResponse.get]);
// router.put("/", [authController.validateToken, spellController.put, genericResponse.put]);
// router.post("/", [authController.validateToken, spellController.post, genericResponse.post]);
// router.delete("/", [authController.validateToken, spellController.remove, genericResponse.remove]);

module.exports = router;
