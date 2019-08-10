const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/NikeReview', {
  useNewUrlParser: true
});

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
