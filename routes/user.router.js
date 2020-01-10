const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { authService } = require("../util/auth");

router.get("/", [authService.validateToken, userController.get, genericResponse.get]);
router.post("/", [authService.validateToken, userController.post, genericResponse.post]);

module.exports = router;
