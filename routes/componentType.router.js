const express = require("express");
const router = express.Router();
const { componentTypeController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, componentTypeController.get, genericResponse.get]);
// router.put("/", [authController.validateToken, componentTypeController.put, genericResponse.put]);
// router.post("/", [authController.validateToken, componentTypeController.post, genericResponse.post]);
// router.delete("/", [authController.validateToken, componentTypeController.remove, genericResponse.remove]);

module.exports = router;