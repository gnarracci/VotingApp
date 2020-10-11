const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    polls: [{ type: mongoose.Schema.Types.ObjectId, ref: "Poll" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Password Encryption
userSchema.statics.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// Password Comparition
userSchema.statics.matchPassword = async (password, savedPassword) => {
  const match = await bcrypt.compare(password, savedPassword);
  return match;
};

module.exports = mongoose.model("User", userSchema);
