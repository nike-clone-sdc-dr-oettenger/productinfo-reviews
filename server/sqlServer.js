const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
//const NikeReview = require('../db/index.js');
//const {NikeReview, postToDb, deleteDoc, updateDoc} = require('../db/index.js')
const {getFromSql, postToSql, deleteFromSql, putToSql} = require('../db/squelizeIndex.js');
const cors = require('cors');

const redis = require('redis');



app.use(express.static('../public/dist'));
app.use(bodyParser());

app.use(cors());


var client = redis.createClient({
  host: 'redis-16798.c1.us-west-2-2.ec2.cloud.redislabs.com',
  port: '16798',
  no_ready_check: true
});
client.auth('password', function(err) {
  if (err) {
    console.log(err);
  }
});
client.on('error', function(err) {
  console.log('Error ' + err);
});
client.on('connect', function() {
  console.log('yaaayyyyyyyy we are connected');
});

// app.get('/', function (req, res) {
//   console.log('page loaded');
//   res.sendFile('/Users/marcus/Code/productinfo-reviews/public/dist/index.html');
//   //res.send('please work bro');
// })







app.get('/loaderio-9263376403b50a059029213754df6b48', (req, res) => {
  res.send('loaderio-9263376403b50a059029213754df6b48');
})

app.get('/api/reviews', (req, res) => {
  //console.log(req);
  console.log('recieving real get request');
  let shoeId = req.query.shoe_id;
  client.get(shoeId, (err, val) => {
    if (err) {
      console.log('redis err', err)
    } else if (val) {
      console.log('hit reddis cache');
      res.send(val)
    } else {
      console.log('going to db')
      getFromSql(req.query.shoe_id).then(function(prod) {
        client.set(shoeId, JSON.stringify(prod))
        res.send(prod);
        console.log('server side get request complete')
        
      })
    }
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

app.listen(3000, () =>
  console.log(`Nike Review Component listening on port ${port}!`)
);