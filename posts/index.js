const express = require("express");
const bodyParser = require('body-parser')
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser)

const posts = {};

app.get("/posts", (_, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = { id, title };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log(`Server listening on 4000`);
});
