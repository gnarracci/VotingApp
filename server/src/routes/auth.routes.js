const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth.controller");

// Signup User
router.post("/signup", authCtrl.signup);

// Signin User
router.post("/signin", authCtrl.signin);

module.exports = router;
