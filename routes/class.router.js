const express = require("express");
const router = express.Router();
const { classController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, classController.get, genericResponse.get]);
// router.put("/", [authController.validateToken, classController.put, genericResponse.put]);
// router.post("/", [authController.validateToken, classController.post, genericResponse.post]);
// router.delete("/", [authController.validateToken, classController.remove, genericResponse.remove]);

module.exports = router;