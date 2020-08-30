const express = require("express");
const router = express.Router();
const { bagTagController, authController } = require("../controllers");
const { genericResponse } = require("../util/responses");
const { bagTagValidator } = require('../validators');

router.get("/", [authController.validateToken, bagTagValidator.validate, bagTagController.get, genericResponse.get]);
router.put("/", [authController.validateToken, bagTagValidator.validate, bagTagController.put, genericResponse.put]);
router.post("/", [authController.validateToken, bagTagValidator.validatePost, bagTagController.post, genericResponse.post]);
router.delete("/", [authController.validateToken, bagTagValidator.validate, bagTagController.remove, genericResponse.remove]);

module.exports = router;