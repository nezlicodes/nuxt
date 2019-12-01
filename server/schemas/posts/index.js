const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Username is required"]
  },
  created: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Post", postsSchema);
