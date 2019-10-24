const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
//const NikeReview = require('../db/index.js');
//const {NikeReview, postToDb, deleteDoc, updateDoc} = require('../db/index.js')
const {getFromSql, postToSql, deleteFromSql, putToSql} = require('../db/squelizeIndex.js');
const cors = require('cors');

app.use(express.static('public/dist'));
app.use(bodyParser());

app.use(cors());

app.listen(port, () =>
  console.log(`Nike Review Component listening on port ${port}!`)
);

app.get('/api/reviews', (req, res) => {
  res.send('now this is podracing');
})

/*
app.get('/api/reviews', (req, res) => {
  //console.log(req);
  getFromSql(req.query.shoe_id).then(function(prod) {
    res.send(prod);
    console.log('server side get request complete')
  })
  // getFromSql(req.body).then(res.end(),
  //   console.log('document saved')
  // );  
});

app.post('/api/reviews', (req, res) => {
  postToSql(req.body).then(res.end(),
    console.log('document saved')
  );  
});

app.put('/api/reviews', (req, res) => {
  putToSql(req.body).then(res.end(),
    console.log('document updated')
  );  
});

app.delete('/api/reviews', (req, res) => {
  console.log(req.query.id);
  deleteFromSql(req.query.id).then(res.end(),
    console.log('document deleted')
  );  
})
*/