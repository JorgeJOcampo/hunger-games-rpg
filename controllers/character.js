'use strict';

const path = require('path');
const fs = require('fs');

const Character = require('../models/character');

function actionSelector() {
    const possibleActions = ['attack', 'poison', 'suicide', 'sponsor', 'run_away', 'sanity', 'talk', 'do_nothing'];
    const weapon = ['bomb', 'sword', 'vasito', 'bit_coin'];
    let target = [];
    return 'attack';
}

function dayResolution(req, res){
    const characterId = req.params.id;
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
            const action = actionSelector();
            console.log('Action');
            res.status(200).send({action: action});
        });
    const action = actionSelector();
    console.log('Action');
    res.status(200).send({action: action});
}

module.exports = {
    dayResolution
};