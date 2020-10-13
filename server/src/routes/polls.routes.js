const express = require("express");
const router = express.Router();
const pollCtrl = require("../controllers/polls.controller");
const authJwt = require("../middlewares/authJwt");

// Get All Polls
router.get("/", pollCtrl.getPolls);

// Get a Poll by Id
router.get("/:pollId", pollCtrl.getPoll);

// Create a Poll
router.post("/", authJwt.verifyToken, pollCtrl.createPoll);

// Update a Poll by Id
router.put("/:pollId", pollCtrl.updatePoll);

// Delete a Poll by Id
router.delete("/:pollId", pollCtrl.deletePoll);

module.exports = router;
