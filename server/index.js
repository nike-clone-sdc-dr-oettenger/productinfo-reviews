const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const NikeReview = require('../db/index.js');
const cors = require('cors');

app.use(express.static('public/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
process.title = 'NikeReview';

app.use(cors());

app.get('/api/reviews', (req, res) => {
  let dbshoe = req.query.shoe_id;

  console.log('db shoe on 3000', dbshoe);

  NikeReview.find({ shoe_id: dbshoe }, (err, reviews) => {
    if (err) {
      res.status(404).send(`you have an error: ${err}`);
    } else {
      res.status(200).send(reviews);
    }
  });

  // res.status(200).send(`mongoose request for ${dbshoe}`);
});

app.listen(port, () =>
  console.log(`Nike Review Component listening on port ${port}!`)
);

//review update
