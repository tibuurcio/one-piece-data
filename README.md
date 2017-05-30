# One Piece Data

[![travis build](https://img.shields.io/travis/tibuurcio/one-piece-data.svg)](https://travis-ci.org/tibuurcio/one-piece-data)
[![version](https://img.shields.io/npm/v/one-piece-data.svg)](https://www.npmjs.com/package/one-piece-data)
![MIT license](https://img.shields.io/npm/l/one-piece-data.svg)

Get names from the One Piece anime. Data is from [One Piece Wikia](http://onepiece.wikia.com/wiki/List_of_Canon_Characters)

## Install

```
$ npm install --save one-piece-data
```

## Usage

```js
const OnePiece = require('one-piece-data');

OnePiece.all; //Array with the names of every One Piece character that has ever appeared in or been mentioned in the manga and has been named.

OnePiece.random(); //'Charlotte Pudding'

OnePiece.random(3); //['Enel', 'Portgas D. Ace', 'Trafalgar Law']

OnePiece.strawHatCrew.all; //Array with the names of all members of the straw hat crew

OnePiece.strawHatCrew.random(); //'Nami'
```
