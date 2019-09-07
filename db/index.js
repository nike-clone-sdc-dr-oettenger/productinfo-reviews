const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://justinrobertohara:root@justincluster-pvv5d.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);

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

module.exports = NikeReview;

//review update
