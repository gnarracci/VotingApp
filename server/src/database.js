const mongoose = require("mongoose");

const URI = "mongodb://localhost/vote_db";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("DB is Connected!"))
  .catch((error) => console.log(error));

module.exports = mongoose;
