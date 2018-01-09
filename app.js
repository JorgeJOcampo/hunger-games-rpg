'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var character_routes = require('./routes/character');

app.use('/', character_routes);

module.exports = app;
