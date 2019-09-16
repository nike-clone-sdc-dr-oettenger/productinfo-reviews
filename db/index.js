const mongoose = require('mongoose');
// mongoose.connect(
//   'mongodb+srv://justinrobertohara:root@justincluster-pvv5d.mongodb.net/test?retryWrites=true&w=majority&authSource=true',
//   {
//     useNewUrlParser: true
//   }
// );

// potential bug fix
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

const connectWithRetry = () => {
  console.log('MongoDB connection with retry');
  mongoose
    .connect(
      'mongodb+srv://justinrobertohara:root@justincluster-pvv5d.mongodb.net/NikeReview?retryWrites=true&w=majority&authSource=true',
      options
    )
    .then(() => {
      console.log(`MongoDB is connected`);
    })
    .catch(err => {
      console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

const NikeReviewScehma = new mongoose.Schema({
  shoe_id: Number,
  review_star: Number,
  review_body: String,
  review_username: String,
  review_date: String,
  review_location: String,
  reviewTitle: String,
  upStar: Number,
  downStar: Number,
  review_title: String
});

const NikeReview = mongoose.model('NikeReview', NikeReviewScehma);

module.exports = NikeReview;

//review update
