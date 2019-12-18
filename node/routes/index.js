const express = require("express");
const router = express.Router();

const loginRouter = require("./login.route");
router.use("/login", loginRouter);

const userRouter = require("./users.router");
router.use("/users", userRouter);

module.exports = router;
