const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user_routes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', user_routes);

module.exports = app;
