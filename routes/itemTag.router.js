const express = require("express");
const router = express.Router();
const { itemTagController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { itemTagValidator } = require('../validators');

router.get("/", [authController.validateToken, itemTagValidator.validate, itemTagController.get, genericResponse.get]);
router.put("/", [authController.validateToken, itemTagValidator.validate, itemTagController.put, genericResponse.put]);
router.post("/", [authController.validateToken, itemTagValidator.validatePost, itemTagController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, itemTagValidator.validate, itemTagController.remove, genericResponse.remove]);

module.exports = router;