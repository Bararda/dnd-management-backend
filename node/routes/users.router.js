const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { responses } = require("../controllers");

router.get("/", [userController.get]);

module.exports = router;
