const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const User = require("../models/User");
const Role = require("../models/Role");

export const verifyToken = async (req, res, next) => {
  try {
    // Token taken with Bearer
    const token = req.headers.authorization.split(" ")[1];

    // Token Sent Verification
    if (!token) return res.status(403).json({ message: "No token provided!" });

    // Token Info Verification
    const decoded = jwt.verify(token, SECRET);

    // Id user saved on Request Object
    req.userId = decoded.id;

    // User Data
    const user = await User.findById(req.userId, { password: 0 });

    if (!user) return res.status(404).json({ message: "No User Found!" });

    next();
  } catch (error) {
    return res.status(500).json({ message: "Unauthorized!" });
  }
};

// Users Roles Verfications
export const isUser = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "user") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: "Require User Role!" });
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: "Require Admin Role!" });
};

export const isBoth = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin" || "user") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: "No Role has been loaded!" });
};
