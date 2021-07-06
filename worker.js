const { parentPort } = require('worker_threads');
const fs = require('fs');
const getEditDistance = require('./edit-distance');
const words = fs.readFileSync('./english-words.txt', 'utf-8').trim().split(/\r?\n/g);

function slowSpellCheck(input) {
  let bestWord = '';
  let bestSimilarity = 0;
  for (const word of words) {
    const similarity = getEditDistance(input, word).similarity;
    if (similarity > bestSimilarity) {
      bestWord = word;
      bestSimilarity = similarity;
    }
  }
  return bestWord;
}

parentPort.on('message', (evt) => {
  const input = evt.word.toLowerCase();
  const corrected = slowSpellCheck(input);
  parentPort.postMessage({ word: corrected, correct: corrected === input });
});
