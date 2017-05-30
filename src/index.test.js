var expect = require('chai').expect;
var onePieceData = require('./index.js');

describe('one-piece-data', function() {
  describe('allCharacters', function() {
    it('should be an array of strings', function() {
      expect(onePieceData.strawHatCrew.all).to.be.an('array');
      expect(onePieceData.allCharacters).to.satisfy(isArrayOfStrings);
    });

    it('should contain `Monkey D. Luffy`', function() {
      expect(onePieceData.allCharacters).to.include('Monkey D. Luffy');
    });
  });

  describe('random', function() {
    it('should return a random character name from onePieceData.allCharacters', function() {
      var randomItem = onePieceData.random();
      expect(onePieceData.allCharacters).to.include(randomItem);
    });
  });

  describe('strawHatCrew', function() {
    describe('all', function() {
      it('should be an array of strings', function() {
        expect(onePieceData.strawHatCrew.all).to.be.an('array');
        expect(onePieceData.strawHatCrew.all).to.satisfy(isArrayOfStrings);
      });

      it('should contain 11 items', function() {
        expect(onePieceData.strawHatCrew.all).to.have.lengthOf(11);
      });
    });

    describe('random', function() {
      it('should return a random member of the straw hat crew', function() {
        var randomItem = onePieceData.strawHatCrew.random();
        expect(onePieceData.strawHatCrew.all).to.include(randomItem);
      });
    });
  });
});

function isArrayOfStrings(array) {
  return array.every(function(item) {
    return typeof item === 'string';
  });
}
