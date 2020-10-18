const express = require("express");
const router = express.Router();
const pollCtrl = require("../controllers/polls.controller");
const authJwt = require("../middlewares/authJwt");

//User Polls
router.get("/user", authJwt.verifyToken, pollCtrl.usersPolls);

// Get All Polls
router.get("/", authJwt.verifyToken, pollCtrl.getPolls);

// Get a Poll by Id
router.get("/:pollId", authJwt.verifyToken, pollCtrl.getPollById);

// Create a Poll
router.post("/", authJwt.verifyToken, pollCtrl.createPoll);

// Update a Poll by Id
router.put("/:pollId", authJwt.verifyToken, pollCtrl.updatePollById);

// Delete a Poll by Id
router.delete("/:pollId", authJwt.verifyToken, pollCtrl.deletePollById);

//Vote for a Poll
router.post("/: pollId", authJwt.verifyToken, pollCtrl.vote);

module.exports = router;
