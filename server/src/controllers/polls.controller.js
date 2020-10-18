const User = require("../models/User");
const Poll = require("../models/Poll");

// User Polls
export const usersPolls = async (req, res) => {
  try {
    const id = req.userId;
    const userPolls = await Poll.find({ user: id }).populate("polls");
    res.status(200).json(userPolls);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong!" });
  }
};

// Create a Poll
export const createPoll = async (req, res) => {
  try {
    console.log(req.body);
    const { question, options } = req.body;
    const user = req.userId;
    const newPoll = new Poll({
      question,
      user,
      options: options.map((option) => ({ option, votes: 0 })),
    });
    const pollSaved = await newPoll.save();
    res.status(201).json(pollSaved);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong!" });
  }
};

// Get all Polls
export const getPolls = async (req, res) => {
  try {
    const Polls = await Poll.find().populate("user", ["username", "id"]);
    res.status(200).json(Polls);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong!" });
  }
};

// Get a Poll
export const getPollById = async (req, res) => {
  try {
    const { pollId } = req.params;
    const poll = await Poll.findById(pollId).populate("user", [
      "username",
      "id",
    ]);
    res.status(200).json(poll);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong!" });
  }
};

// Update a Poll
export const updatePollById = async (req, res) => {
  try {
    const updatedPoll = await Poll.findByIdAndUpdate(
      req.params.pollId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedPoll);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

// Delete a Poll
export const deletePollById = async (req, res) => {
  try {
    const { pollId } = req.params;
    const deletePoll = await Poll.findByIdAndDelete(pollId);
    res.status(202).json({ message: "Poll deleted!" });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong!" });
  }
};

export const vote = async (req, res) => {
  try {
    const { pollId } = req.params;
    const { id } = req.userId;
    const { answer } = req.body;
    if (answer) {
      const poll = await Poll.findById(pollId);
      if (!poll) throw new Error("No poll found");
      const vote = poll.options.map((option) => {
        if (option.option === answer) {
          return {
            option: option.option,
            _id: option._id,
            votes: option.votes + 1,
          };
        } else {
          return option;
        }
      });
      if (poll.voted.filter((user) => user.toString() === userId).length <= 0) {
        poll.voted.push(userId);
        poll.options = vote;
        await poll.save();
        res.status(202).json(poll);
      } else {
        throw new Error("Already Voted");
      }
    } else {
      throw new Error("No answer provided");
    }
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
  }
};
