const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/vote_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("DB is Connected!"))
  .catch((error) => console.log(error));
