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

const postToDb = function(obj) {
  var tempModel = new NikeReview({
    shoe_id: obj.shoe_id,
    review_star: obj.review_star,
    review_body: obj.review_body,
    review_username: obj.review_username,
    review_data: obj.review_data,
    review_location: obj.review_location,
    upStar: obj.upStar,
    downStar: obj.downStar,
    review_title: obj.review_title
  });
  return tempModel.save()
}

const deleteDoc = function(id, cb) {
  NikeReview.deleteOne({shoe_id: id}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`deleted shoe with id of ${id}`);
      cb.end();
    }
  })  
}

const updateDoc = function(id, update, res) {
  let conditions = {shoe_id: id};
  console.log('******************************************************** \n', update);
  NikeReview.findOneAndUpdate(conditions, update, function(err, product) {
    if (err) {
      console.log(err);
    } else {
      console.log(`updated shoe: ${id}`);
      res.end()
    }
  })
}

module.exports = {
  NikeReview,
  postToDb,
  deleteDoc,
  updateDoc
}

//review update
