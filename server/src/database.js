const mongoose = require("mongoose");
const URI = process.env.URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("DB is Connected!"))
  .catch((error) => console.log(error));
