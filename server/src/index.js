import app from "./app.mjs";
import "./database.mjs";

app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});
