const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const NikeReview = require('../db/index.js');

app.use(express.static('public/dist'));
app.use(bodyParser.json());

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
