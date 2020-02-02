const express = require("express");
const router = express.Router();
const { componentTypeController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { authService } = require("../util/auth");

router.get("/", [authService.validateToken, componentTypeController.get, genericResponse.get]);
router.put("/", [authService.validateToken, componentTypeController.put, genericResponse.put]);
router.post("/", [authService.validateToken, componentTypeController.post, genericResponse.post]);
router.delete("/", [authService.validateToken, componentTypeController.remove, genericResponse.remove]);

module.exports = router;