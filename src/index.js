import uniqueRandomArray  from 'unique-random-array';
import allCharacters from './all.json';
import strawHatNames from './strawHatCrew.json';

module.exports = {
  allCharacters: allCharacters,
  random: uniqueRandomArray(allCharacters),
  strawHatCrew: {
    all: strawHatNames,
    random: uniqueRandomArray(strawHatNames)
  }
};