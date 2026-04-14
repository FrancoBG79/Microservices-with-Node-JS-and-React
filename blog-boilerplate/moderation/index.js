const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('', (req, res) => {
  res.send('Hello Moderation');
});

app.get('/events', (req, res) => {
  res.send('this is events');
});


app.listen(4003, () => {
  console.log('Listening on 4003');
});