const User = require("../models/User");
const Poll = require("../models/Poll");

// Create a Poll
export const createPoll = async (req, res) => {
  try {
    console.log(req.body);
    const { question, options } = req.body;
    const userInfo = await User.findById(req.userId);
    const user = userInfo.username;
    console.log(user);
    const newPoll = new Poll({
      question,
      options: options.map((option) => ({ option, votes: 0 })),
    });
    const pollSaved = await newPoll.save();
    res.status(201).json(pollSaved);
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Get all Polls
export const getPolls = async (req, res) => {
  try {
    const Polls = await Poll.find();
    res.status(200).json(Polls);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
  }
};

// Get a Poll
export const getPollById = async (req, res) => {
  try {
    const { pollId } = req.params;
    const poll = await Poll.findById(pollId);
    res.status(200).json(poll);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
  }
};

// Update a Poll
export const updatePollById = async (req, res) => {
  try {
    console.log(req.params.pollId);
    console.log(req.body);
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
    res.status(200).json({ message: "Poll deleted!" });
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
  }
};
