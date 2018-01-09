'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = Schema({
    name: String,
    sex: String,
    description: String,
    str: Number,
    dex: String
});

module.exports = mongoose.model('Character', CharacterSchema);
