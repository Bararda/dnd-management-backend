const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
router.use("/auth", authRouter);

const userRouter = require("./user.router");
router.use("/users", userRouter);

const roleRouter = require("./role.routes");
router.use("/roles", roleRouter);

module.exports = router;
