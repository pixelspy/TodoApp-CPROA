const express = require('express')
const app = express.Router()
const client = require('../model/db')

app.get('/categories', (req,res) => {
  client.query('SELECT * from categories').then( (data) => {
    res.send(data.rows)
  }).catch(err => {
      res.send(JSON.stringify(err));
  });
});

module.exports = app;
