const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const NikeReview = require('../db/index.js');

app.use(express.static('public/dist'));
app.use(bodyParser.json());

app.get('/api/reviews', (req, res) => {
  NikeReview.find({}).exec((err, data) => {
    res.status(200).send(data);
  });
});



app.listen(port, () =>
  console.log(`Nike Review Component listening on port ${port}!`)
);

//review update
