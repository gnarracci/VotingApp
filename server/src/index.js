const app = require("./app");
require("./database");
const env = require("node-env-file"); // .env file
env(__dirname + "/.env");

// Starting the Server

app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});
