const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const genericController = require('../util/controllers/generic.controller');
router.get("/", [authController.validateToken, genericController.subscribe]);


module.exports = router;