const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysqlConnection = require('./config/database');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  mysqlConnection.query('SELECT * FROM account WHERE email=?', [email], (err, rows, fields) => {
    if (!err) {
      if (rows.length > 0) {
        if (rows[0].password === password) {
          res.send({
            "status": 200,
            "data": rows,
          });
        } else {
          res.status(500).send({
            "status": 500,
            "message": "Email and password does not match"
          });
        }
      } else {
        res.status(500).send({
          "status": 500,
          "message": "Email does not exist"
        });
      }
    } else {
      res.status(500).send({
        "status": 500,
        "message": "Email does not exist"
      });
    }
  });
});

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  mysqlConnection.query('INSERT INTO account (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, rows, fields) => {
    if (!err) {
      res.send({
        "status": 200,
        "message": "Insert Successfully"
      });
    } else {
      res.status(500).send({
        "status": 500,
        "message": err
      });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
