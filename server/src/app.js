const express = require("express");
const morgan = require("morgan");
const handle = require("./handlers");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API-SERVER ARE WORKS!");
});

// Error Handlers
app.use(handle.notfound);
app.use(handle.errors);

module.exports = app;
