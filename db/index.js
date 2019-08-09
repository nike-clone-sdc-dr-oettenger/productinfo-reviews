const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/NikeReview', { useNewUrlParser: true });
const dummydata = require('../dummydata.json');

console.log(dummydata);
const NikeReview = mongoose.model('NikeReview', {
  shoe_id: Number,
  review_star: Number,
  review_body: String,
  review_username: String,
  review_data: String,
  review_location: String,
  upStar: Number,
  downStar: Number,
  review_title: String
});

NikeReview.collection.insertMany(dummydata, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(
      `you have seeded ${dummydata.length} docs into your mongoose database`
    );
  }
});
