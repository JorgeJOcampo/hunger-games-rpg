'use strict';

var path = require('path');
var fs = require('fs');

var Character = require('../models/character');

function dayResolution(req, res){
    var characterId = req.params.id;
    Character.findById(characterId)
        .then((character) => {
            if(character.name === 'Lucy'){
                character.status = 'dead';
            }
        })
        .then((character) => {
            if(character.name === 'Antonela'){
                character.status = 'win';
            }
        });
}

module.exports = {
    dayResolution
};