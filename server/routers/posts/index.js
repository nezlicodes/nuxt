const express = require("express");
const router = express.Router();
const moment = require("moment");
const Post = require("/home/benmeradi/Desktop/projects/my_ape/server/schemas/posts/index.js");

router.get("/", async (req, res) => {
  const posts = await Post.find({});
  try {
    console.log(posts)
    res.json(posts)
  } catch (err) {
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  const new_post = new Post({
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
    created_at: moment().format("MMM Do YY"),
  })
  try {
    new_post.save().then(data => {
      console.log(data)
      console.log(Post.find())
    })
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
