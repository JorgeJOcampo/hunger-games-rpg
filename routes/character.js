'use strict';

var express = require('express');
var CharacterController = require('../controllers/character');
var api = express.Router();

api.get('/character', CharacterController.dayResolution);

module.exports = api;
