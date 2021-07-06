const { Worker } = require('worker_threads');
const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/'));

app.use(require('body-parser').json());

/** @type Worker[] */
const spellWorkers = [];

app.post('/api/spell-check', (req, res) => {
  if (spellWorkers.length === 0) {
    spellWorkers.push(new Worker('./worker.js'));
  }

  const myWorker = spellWorkers.pop();
  myWorker.postMessage({ word: req.body.word });
  myWorker.once('message', (result) => {
    res.json(result);
    spellWorkers.push(myWorker);
  });
});

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
