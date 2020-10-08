const app = require("./app");
const { mongoose } = require("./database");

// Server
app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});
