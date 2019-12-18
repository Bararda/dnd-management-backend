const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [userController.get, genericResponse.get]);

module.exports = router;
