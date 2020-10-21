"use strict";

var express = require("express");

var morgan = require("morgan");

var cors = require("cors");

var pkg = require("../package.json");

var _require = require("./libs/initialSetup"),
    createRoles = _require.createRoles;

var app = express();
createRoles();

var env = require("node-env-file"); // .env file


env(__dirname + "/.env");

var pollsRoutes = require("./routes/polls.routes");

var authRoutes = require("./routes/auth.routes"); // Settings


app.set("port", process.env.PORT || 4000);
app.set("pkg", pkg); // Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors()); // Info

app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    description: app.get("pkg").description
  });
}); // Routes

app.use("/api/polls", pollsRoutes);
app.use("/api/auth", authRoutes);
module.exports = app;