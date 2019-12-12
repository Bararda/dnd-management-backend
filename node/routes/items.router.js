const express = require("express");
const router = express();
const { itemController } = require("../controllers");
const { responses } = require("../controllers");

router.get("/", (req, res) => {
    res.send("Items!");
});

module.exports = router;
