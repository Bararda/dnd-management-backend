const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.post("/login", [authController.login, genericResponse.get]);
router.post("/reissueToken", [authController.reissueToken, genericResponse.get]);
router.post("/logout", [authController.logout, genericResponse.get]);

module.exports = router;
