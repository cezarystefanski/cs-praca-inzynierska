const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.status(400).end('bbddssadsada');
});

app.listen(8999);
