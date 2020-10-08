"use strict";

var express = require("express");

var morgan = require("morgan");

var app = express(); // Settings

app.set("port", process.env.PORT || 4000); // Middlewares

app.use(morgan("dev"));
app.use(express.json()); // Routes

module.exports = app;