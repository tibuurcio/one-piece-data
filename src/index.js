var uniqueRandomArray = require('unique-random-array');
var allCharacters = require('./all.json');
var strawHatNames = require('./strawHatCrew.json');

module.exports = {
  allCharacters: allCharacters,
  random: uniqueRandomArray(allCharacters),
  strawHatCrew: {
    all: strawHatNames,
    random: uniqueRandomArray(strawHatNames)
  }
};