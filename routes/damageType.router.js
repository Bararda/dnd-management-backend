const express = require("express");
const router = express.Router();
const { damageTypeController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [authController.validateToken, damageTypeController.get, genericResponse.get]);
// router.put("/", [authController.validateToken, damageTypeController.put, genericResponse.put]);
// router.post("/", [authController.validateToken, damageTypeController.post, genericResponse.post]);
// router.delete("/", [authController.validateToken, damageTypeController.remove, genericResponse.remove]);

module.exports = router;