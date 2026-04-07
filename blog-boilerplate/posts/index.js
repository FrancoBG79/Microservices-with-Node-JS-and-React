const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const post = {};

app.get('/', (req, res) => {
  res.send('Hello Posts!');
});

app.get('/posts', (req, res) => {
  // Logic to fetch and return posts
  res.send(post);
});

app.post('/posts', (req, res) => {
  // Logic to create a new post
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  post[id] = { id, title };
  res.status(201).send(post[id]);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});