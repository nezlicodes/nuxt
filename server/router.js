const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("err", err => console.log(err));
db.once("open", () => console.log("Connected to database"));

router.get("/api", (req, res) => {
  res.send("Hello api");
});

module.exports = router;
