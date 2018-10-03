const express = require('express')
const app = express.Router()
const client = require('../model/db')

app.get('/todos', (req,res) => {
  //req : request
  //res :respond
  client.query('SELECT * from todos').then( (data) => {
    res.send(data.rows)
  })
})

app.post('/todos', (req, res) => {
    const { todoName, categoryId } = req.body;
    console.log(req.body);
    client.query(
      'INSERT INTO todos(id, name, id_categories) VALUES (DEFAULT, $1, $2);'
      ,[todoName, categoryId]
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.send(JSON.stringify(err));
    });
});

module.exports = app;
