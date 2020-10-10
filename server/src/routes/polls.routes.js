const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("You are Voted!");
});

module.exports = router;
