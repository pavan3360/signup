const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sign_app',
});

connection.connect((err) => {
  if(!err)
    console.log('Connected');
  else {
    console.log('Failed ' + JSON.stringify(err, undefined, 2));
  }
});

module.exports = connection;
