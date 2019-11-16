const express = require('express');
const app = express();
const port = 4069;
const bodyParser = require('body-parser');
const cors = require('cors');

//app.use(express.static('../public/dist'));
app.use(bodyParser());

app.use(cors());

var urls = ['instance1', 'instance2', 'instance3']

app.get('/', (req, res) => {
  console.log('get request to load balancer');
  //send random url's bundle
  res.sendFile('/Users/marcus/Code/productinfo-reviews/public/dist/bundle.js');
})

app.listen(port, () =>
  console.log(`Nike Review Component listening on bort ${port}!`)
);