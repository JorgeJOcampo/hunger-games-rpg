'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = Schema({
    name: String,
    //Si sos mujer tenés más probabilidad de que Santi te venga a hablar de Kamen Rider
    sex: String,
    str: Number,
    dex: Number,
    int: Number,
    luck: Number,
    chr: Number,
    image: String,
    status: String
});

module.exports = mongoose.model('Character', CharacterSchema);
