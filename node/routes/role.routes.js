const express = require("express");
const router = express.Router();
const { roleController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.get("/", [roleController.get, genericResponse.get]);
router.post("/", [roleController.post, genericResponse.post]);

module.exports = router;
