const express = require("express");
const morgan = require("morgan");

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

// Error Handle
app.use((req, res, next) => {
  const err = new Error("Route not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res
    .status(err.starus || 500)
    .json({ err: err.message || "Something went wrong!" });
});

module.exports = app;
