const express = require("express");
const router = express.Router();
const { classController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { authService } = require("../util/auth");

router.get("/", [authService.validateToken, classController.get, genericResponse.get]);
router.put("/", [authService.validateToken, classController.put, genericResponse.put]);
router.post("/", [authService.validateToken, classController.post, genericResponse.post]);
router.delete("/", [authService.validateToken, classController.remove, genericResponse.remove]);

module.exports = router;