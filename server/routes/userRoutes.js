const express = require("express");
const { registerUser } = require("../controllers/userControllers");

const router = express.router();

router.route("/").post(registerUser);

module.exports = router;
