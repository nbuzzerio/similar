const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const db = require('./dbHelpers/db.js');

const jsonParser = bodyParser.json();

app.get('/url/:dogId', function(req, res) {
  db.get(req.params.dogId, function(err, url) {
    if (err) throw new Error(err);
    res.send(url);
  });
});

app.listen(port, () => console.log('Similar app listening on port ' + port));