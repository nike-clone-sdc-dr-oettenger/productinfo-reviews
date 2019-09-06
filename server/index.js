const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const NikeReview = require('../db/index.js');

var server = app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});

app.use(express.static('public/dist'));
app.use(bodyParser.json());
process.title = 'NikeReview';

app.get('/api/reviews', (req, res) => {
  let shoe = req.query.shoe_id;

  NikeReview.find({ shoe_id: shoe }, (err, reviews) => {
    if (err) {
      res.status(404).send(`you have an error: ${err}`);
    } else {
      res.status(200).send(reviews);
    }
  });
});

app.listen(port, () =>
  console.log(`Nike Review Component listening on port ${port}!`)
);

//review update
