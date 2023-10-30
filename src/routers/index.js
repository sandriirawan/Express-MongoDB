const express = require("express");
const router = express.Router();
const userRouters = require("./usersRouters");

router.use("/users", userRouters);

module.exports = router;
