require("dotenv").config();
const morgan = require("morgan");
const express = require("express");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

module.exports = app;
