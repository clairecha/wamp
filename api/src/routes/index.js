const express = require('express');
const app = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/sign-up', function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    let postCustomer = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    var sql = `INSERT INTO customers (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${hash}');`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log('1 record inserted');
      res.send(postCustomer);
    });
  });
});
app.post('/sign-in', function (req, res) {
  db.query(
    `select * FROM customers where email = '${req.body.email}'`,
    function (err, result) {
      if (err) throw err;
      bcrypt.compare(req.body.password, result[0].password, function (
        err,
        resulta
      ) {
        if (resulta) {
          console.log('you are authenticated');
          res.send(result);
        } else {
          res.send('sorry we dont know this user');
        }
      });
    }
  );
});

module.exports = app;
