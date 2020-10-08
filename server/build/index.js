"use strict";

var app = require("./app");

var _require = require("./database"),
    mongoose = _require.mongoose; // Server


app.listen(app.get("port"), function () {
  console.log("Server is running on port", app.get("port"));
});