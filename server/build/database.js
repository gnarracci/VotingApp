"use strict";

var mongoose = require("mongoose");

var URI = process.env.URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function (db) {
  return console.log("DB is Connected!");
})["catch"](function (error) {
  return console.log(error);
});