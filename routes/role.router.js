const express = require("express");
const router = express.Router();
const { roleController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { authService } = require("../util/auth");

router.get("/", [authService.validateToken, roleController.get, genericResponse.get]);
router.post("/", [authService.validateToken, roleController.post, genericResponse.post]);

module.exports = router;
