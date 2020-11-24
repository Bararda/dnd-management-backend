const express = require("express");
const router = express.Router();
const { itemController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, itemController.get, genericResponse.get]);
router.put("/", [authController.validateToken, itemController.put, genericResponse.put]);
router.post("/", [authController.validateToken, itemController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, itemController.remove, genericResponse.remove]);

module.exports = router;