const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
  //   var sql =
  //     "INSERT INTO customers ( name, email, password) VALUES ('Laurie', 'lauriedu37@gmail.com', 'lapin')";
  //   connection.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log('1 record inserted');
  //   });
});

module.exports = connection;
