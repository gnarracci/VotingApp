import { options } from "../app";
import Role from "../models/Role";

const Poll = require("../models/Poll");

// Create a Poll
export const createPoll = async (req, res) => {
  try {
    console.log(req.body);
    const { question, options } = req.body;
    const newPoll = new Poll({
      question,
      options: options.map((option) => ({ option, votes: 0 })),
    });
    const pollSaved = await newPoll.save();
    res.status(201).json(pollSaved);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
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
export const getPoll = (req, res) => {};

// Update a Poll
export const updatePoll = (req, res) => {};

// Delete a Poll
export const deletePoll = (req, res) => {};
