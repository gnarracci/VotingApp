"use strict";

var app = require("./app");

require("./database"); // Starting the Server


app.listen(app.get("port"), function () {
  console.log("Server is running on port", app.get("port"));
});