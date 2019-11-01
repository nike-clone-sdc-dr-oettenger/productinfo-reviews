const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
//const NikeReview = require('../db/index.js');
//const {NikeReview, postToDb, deleteDoc, updateDoc} = require('../db/index.js')
const {getFromCouch, insertToCouch} = require('../db/couchDbIndex.js');
const cors = require('cors');

app.use(express.static('public/dist'));
app.use(bodyParser.json());

app.use(cors());

app.listen(port, () =>
  console.log(`Nike Review Component listening on port ${port}!`)
);

app.get('/api/reviews', (req, res) => {
  console.log('express get request');
  getFromCouch(Number(req.query.shoeId)).then(function(prod) {
    res.send(prod)
  })
});

app.post('/api/reviews', (req, res) => {
  insertToCouch(req.body).then(function() {
    res.end();
  })
})

app.delete('/api/reviews', (req, res) => {
  deleteDoc(req.body.id, res)
})

app.put('/api/reviews', (req, res) => {
  updateDoc(req.body.id, req.body.updates, res)
})

