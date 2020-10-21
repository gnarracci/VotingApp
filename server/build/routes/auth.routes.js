"use strict";

var express = require("express");

var router = express.Router();

var authCtrl = require("../controllers/auth.controller"); // Signup User


router.post("/signup", authCtrl.signup); // Signin User

router.post("/signin", authCtrl.signin);
module.exports = router;