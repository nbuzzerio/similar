var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sagittarius', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to Sagittarius db (similar service)');
});

var breedSchema = new mongoose.Schema({
  id: Number,
  name: String,
  url: String
});

var Breed = mongoose.model('Breed', breedSchema);

var save = function(id, name, url, callback) {
  Breed.findOneAndUpdate({id: id}, {name: name, url: url}, {upsert:true, new:true}, function(err, doc){
    if (err) {
      callback(err);
    } else {
      callback(null, doc);
    }
  });
}

var get = function(id, callback) {
  Breed.findOne({id: id}, function(err, dog){
    if (err) {
      callback(err);
    } else {
      callback(null, dog.url);
    }
  })
}

module.exports.save = save;
module.exports.get = get;
module.exports.db = db;