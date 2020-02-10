const express = require("express");
const router = express.Router();
const { userController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, userController.get, genericResponse.get]);
router.post("/", [authController.validateToken, userController.post, genericResponse.post]);

module.exports = router;
