const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./routes/router");
const keys = require("./config/keys");
const app = express();

//Database Connection to MongoDB
mongoose.connect(keys.mongoURI);
const db = mongoose.connection;
db.on("error", console.error.bind(console.log, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

//View Engine  Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Public Folder Setup
app.use(express.static(path.join(__dirname, "public")));

//Routes Initialization
router(app);

//Server Initialization
const port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server has started on " + port);
  }
});
