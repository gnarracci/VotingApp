const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Role", roleSchema);
