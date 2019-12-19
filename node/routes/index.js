const express = require("express");
const router = express.Router();

const loginRouter = require("./login.route");
router.use("/login", loginRouter);

const userRouter = require("./user.router");
router.use("/users", userRouter);

const roleRouter = require("./role.routes");
router.use("/roles", roleRouter);

module.exports = router;
