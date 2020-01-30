// to seed with test data
const db = require('./db.js');
const files = require('./seedFiles.js');

var filesSaved = 0;

for (var i = 0; i < files.length; i++) {
  // need to replace placeholder Doggy ID name with name from Aaron's service
  db.save(i+1, 'Doggy ' + (i+1),  'https://sagittarius-pups.s3-us-west-1.amazonaws.com/pups/' + files[i], function(err, dog) {
    if (err) {
      throw new Error(err);
      process.exit(1);
    } else {
      console.log('Saved dog breed ' + dog.name + ' to db');
      filesSaved++;
    }
    if (filesSaved === files.length) {
      process.exit(0);
    }
  });
}


