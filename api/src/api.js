const express = require('express');
const app = express();
const routes = require('./routes/index');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// console.log(routes);

app.use('/', routes);

app.listen(3000);
