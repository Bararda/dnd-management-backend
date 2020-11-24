const express = require("express");
const router = express.Router();
const { bagController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, bagController.get, genericResponse.get]);
router.put("/", [authController.validateToken, bagController.put, genericResponse.put]);
router.post("/", [authController.validateToken, bagController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, bagController.remove, genericResponse.remove]);

module.exports = router;