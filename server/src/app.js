require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const pkg = require("../package.json");

const app = express();

const pollsRoutes = require("./routes/polls.routes");

// Settings
app.set("port", process.env.PORT || 4000);
app.set("pkg", pkg);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Info
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
  });
});

// Routes
app.use("/api/polls", pollsRoutes);

module.exports = app;
