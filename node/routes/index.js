const express = require("express");
const router = express.Router();

const userRouter = require("./users.router");
router.use("/users", userRouter);

module.exports = router;
