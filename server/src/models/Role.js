const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    role: {
      name: {
        type: String,
        unique: false,
      },
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Role", roleSchema);
