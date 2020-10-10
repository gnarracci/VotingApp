"use strict";

require("dotenv").config();

var morgan = require("morgan");

var express = require("express");

var app = express(); // Settings

app.set("port", process.env.PORT || 4000); // Middlewares

app.use(morgan("dev"));
app.use(express.json());
module.exports = app;