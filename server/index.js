const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('public/dist'));
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`Nike Review Component listening on port ${port}!`)
);
