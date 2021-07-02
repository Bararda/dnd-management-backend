const express = require("express");
const router = express.Router();
const { tagController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, tagController.get, genericResponse.get]);
router.put("/", [authController.validateToken, tagController.put, genericResponse.put]);
router.post("/", [authController.validateToken, tagController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, tagController.remove, genericResponse.remove]);

module.exports = router;