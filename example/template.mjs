// const fs = require('fs');
import fs from 'fs';
// const path = require('path');
import path from 'path';

// https://stackoverflow.com/questions/64383909/dirname-is-not-defined-in-node-14-version
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const str = fs.readFileSync(path.resolve(__dirname, 'lorem-ipsum.txt'), {encoding: 'utf-8'});

import GetWords from '../index.js';
// const GetWords = require('../index.js');
const g = new GetWords();
const words = g.getWords(str);
const wordCounts = g.getWordCounts(words);

console.log('words', words);
console.log('word counts', wordCounts);
