const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.post("/", [authController.login, genericResponse.get]);

module.exports = router;
