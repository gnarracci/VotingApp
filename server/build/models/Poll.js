"use strict";

var mongoose = require("mongoose");

var optionSchema = new mongoose.Schema({
  option: String,
  votes: {
    type: Number,
    "default": 0
  }
});
var pollSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  question: String,
  options: [optionSchema],
  voted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  timestamps: true,
  versionKey: false
});
module.exports = mongoose.model("Poll", pollSchema);