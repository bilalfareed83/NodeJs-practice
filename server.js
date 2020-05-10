const express = require('express');
const api = require('./api');

const app = express();

app.use(express.json());

app.get('/', api.home);

// app.get('/login', api.login);

app.get('/login', api.getUser);

module.exports = ({ port, cb }) => {
  app.listen(port, cb);
};
