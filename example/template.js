const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve(__dirname, 'lorem-ipsum.txt'), {encoding: 'utf-8'});

const GetWords = require('../index.js');
const g = new GetWords();
const words = g.getWords(str);
const wordCounts = g.getWordCounts(words);

console.log('words', words);
console.log('word counts', wordCounts);
