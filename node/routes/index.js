const express = require("express");
const router = express();

const itemRouter = require("./items.router");
router.use("/items", itemRouter);

module.exports = router;
