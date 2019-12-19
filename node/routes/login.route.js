const express = require("express");
const router = express.Router();
const { authService } = require("../util/auth");
const { genericResponse } = require("../util/responses");

router.post("/", authService.login);

module.exports = router;
