const express = require("express");
const router = express.Router();
const { schoolController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, schoolController.get, genericResponse.get]);
router.put("/", [authController.validateToken, schoolController.put, genericResponse.put]);
router.post("/", [authController.validateToken, schoolController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, schoolController.remove, genericResponse.remove]);

module.exports = router;
