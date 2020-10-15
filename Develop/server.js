const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//morgan is for logging http requests
const PORT = 3100;

const app = express();
//do I need to add a script in the package.json?
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
