const express = require("express");
const router = express.Router();
const moment = require("moment");
const Post = require("/home/benmeradi/Desktop/projects/my_ape/server/schemas/posts/index.js");

router.get("/", async (req, res) => {
  const posts = Post.find({});
  try {
    await posts.then(res => res.json(posts));
  } catch (err) {
    res.json(err);
  }
});

module.exports = router
