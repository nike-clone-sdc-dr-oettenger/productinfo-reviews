const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser());

app.use(express.static('../public/dist'));

app.get('/', (req, res) => {
  res.sendStatus(200);
})

app.listen(port, () =>
  console.log(`Nike Review Component listening on port dfdsfdsfsd ${port}!`)
);

app.get('/api/reviews', (req, res) => {
  
})

