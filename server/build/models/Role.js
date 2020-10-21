"use strict";

var mongoose = require("mongoose");

var roleSchema = new mongoose.Schema({
  name: String
}, {
  versionKey: false
});
module.exports = mongoose.model("Role", roleSchema);