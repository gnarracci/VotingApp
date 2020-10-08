const express = require("express");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes

module.exports = app;
