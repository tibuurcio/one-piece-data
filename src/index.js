import uniqueRandomArray  from 'unique-random-array';
import allCharacters from './all.json';
import strawHatNames from './strawHatCrew.json';

var getRandomItem = uniqueRandomArray(allCharacters);

module.exports = {
  allCharacters: allCharacters,
  random: random,
  strawHatCrew: {
    all: strawHatNames,
    random: uniqueRandomArray(strawHatNames)
  }
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for(var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}