const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/index');

var bodyParser = require('body-parser');
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
};
app.use(allowCrossDomain);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
app.use(express.urlencoded({ extended: false }));

app.listen(3000);
