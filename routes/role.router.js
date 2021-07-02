const express = require("express");
const router = express.Router();
const { roleController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, roleController.get, genericResponse.get]);
// router.post("/", [authController.validateToken, roleController.post, genericResponse.post]);

module.exports = router;
