const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
//const NikeReview = require('../db/index.js');
const {NikeReview, postToDb, deleteDoc, updateDoc} = require('../db/index.js')
const cors = require('cors');

app.use(express.static('public/dist'));
app.use(bodyParser.json());
app.use(cors());

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

app.post('/api/reviews', (req, res) => {
  postToDb(req.body).then(res.end(),
    console.log('document saved')
  );  
})

app.delete('/api/reviews', (req, res) => {
  deleteDoc(req.body.id, res)
})

app.put('/api/reviews', (req, res) => {
  updateDoc(req.body.id, req.body.updates, res)
})

app.listen(port, () =>
  console.log(`Nike Review Component listening on port ${port}!`)
);



//review update
