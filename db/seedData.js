const dummydata = require('../dummydata.json');
const NikeReview = require('./index.js');

NikeReview.collection.insertMany(dummydata, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(
      `you have seeded ${dummydata.length} docs into your mongoose database`
    );
  }
});
