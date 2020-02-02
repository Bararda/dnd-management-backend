const express = require("express");
const router = express.Router();
const { schoolController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { authService } = require("../util/auth");

router.get("/", [authService.validateToken, schoolController.get, genericResponse.get]);
router.put("/", [authService.validateToken, schoolController.put, genericResponse.put]);
router.post("/", [authService.validateToken, schoolController.post, genericResponse.post]);
router.delete("/", [authService.validateToken, schoolController.remove, genericResponse.remove]);

module.exports = router;
