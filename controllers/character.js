'use strict';

var path = require('path');
var fs = require('fs');

var Character = require('../models/character');

function actionSelector() {
    var possibleActions = ['attack', 'poison', 'suicide', 'sponsor', 'run_away', 'sanity', 'talk', 'do_nothing'];
    var weapon = ['bomb', 'sword', 'vasito', 'bit_coin'];
    var target = [];
    return 'attack';
}

function dayResolution(req, res){
    var characterId = req.params.id;
    Character.findById(characterId)
        .then((character) => {
            if(character.name === 'Lucy'){
                character.status = 'dead';
            }
            if(character.name === 'Antonela'){
                character.status = 'win';
            }
            if(character.name === 'Rodra'){
                character.name = 'Joto';
            }
            var action = actionSelector();
            console.log('Action');
            res.status(200).send({action: action});
        });
    var action = actionSelector();
    console.log('Action');
    res.status(200).send({action: action});
}

module.exports = {
    dayResolution
};