const express = require("express");
const router = express.Router();
const { spellComponentTypeController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, spellComponentTypeController.get, genericResponse.get]);
// router.put("/", [authController.validateToken, spellComponentTypeController.put, genericResponse.put]);
// router.post("/", [authController.validateToken, spellComponentTypeController.post, genericResponse.post]);
// router.delete("/", [authController.validateToken, spellComponentTypeController.remove, genericResponse.remove]);

module.exports = router;