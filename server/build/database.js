"use strict";

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/company_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log("DB is Connected!");
})["catch"](function (error) {
  return console.log(error);
});