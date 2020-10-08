"use strict";

var mongoose = require("mongoose");

var URI = "mongodb://localhost/votingApp_db";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log("DB is Connected!");
})["catch"](function (error) {
  return console.log(error);
});
module.exports = mongoose;