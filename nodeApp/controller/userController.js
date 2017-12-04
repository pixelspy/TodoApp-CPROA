const express = require('express')
const app = express.Router()
const client = require('../model/db')
const model = require('../model/userModel')


app.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { prenom, nom } = req.body;
    model.updateUser(id, prenom, nom).then((data) => {
        res.json(data)
    }).catch(err => {
        res.send(err);
    });
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    model.getUserById(id).then((data) => {
        res.json(data.rows)
    }).catch(err => {
        res.send(err);
    });
});

app.post('/user', (req, res) => {
  const {prenom, nom} = req.body
    model.createUser(prenom, nom).then(data => {
        res.json(data)
    }).catch(err => {
        res.send(err);
    });
});

app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    model.deleteUser(id).then((data) => {
        res.json(data)
    }).catch(err => {
        res.send(err);
    });
});

app.get('/users', function(req, res) {
  // console.log(req.params.id);
  model.getAllUsers().then( (datas) => {
    res.send(datas.rows);
  }).catch(err => {
      res.send(err);
  });
});

// get les todos du user à l'iD 2 :
app.get('/user/:id/todos', function(req, res) {
  // console.log(req.params.id);
  const { id } = req.params;
  model.getTodosByUserId(id).then( (datas) => {
    res.json(datas.rows);
  }).catch(err => {
      res.send(err);
  });
});


module.exports = app;
