const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

// const compression = require("compression");
//morgan is for logging http requests
const PORT = 3100;

const app = express();
//do I need to add a script in the package.json?
app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    }
  })
);
app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a"
    })
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
