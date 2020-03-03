const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const axios = require('axios');

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

app.listen(port, () => {
  console.log('Similar app listening on port ' + port);
  axios({
    method: 'get',
    url: 'http://localhost:3002/api/allBreedsSimilar',
    responseType: 'json'
  })
    .then(function (response) {
      db.saveFromInfo(response.data, function(err, docs) {
        if (err) {
          throw new Error(err);
        } else {
          db.updateRanks();
        }
      });
    });
});

// http://localhost:3002/api/allBreedsSimilar