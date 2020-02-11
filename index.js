const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const db = require('./dbHelpers/db.js');

const jsonParser = bodyParser.json();

app.use(cors());

app.use(express.static('client'));
app.use('/', express.static('client', {index: "./dist/index.html"}));

app.get('/url/:dogId', function(req, res) {
  db.get(req.params.dogId, function(err, url) {
    if (err) throw new Error(err);
    res.send(url);
  });
});

app.listen(port, () => console.log('Similar app listening on port ' + port));