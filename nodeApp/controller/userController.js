const express = require('express')
const app = express.Router()
const model = require('../model/userModel')
const {checkCredentialsMiddleware} = require('../auth/login')
// checkCredentialsMiddleware : vérifie les identifiants au login, et génère un token

const {generateToken, checkTokenMiddleware} = require('../auth/jwt')
// checkTokenMiddleWare : pour protéger les routes à protéger du User lambda
// vérifier le token, si il est dans le header

const {roleAuthorization, ownAccount} = require('../auth/authorization')

//fonction middleware avec comme params roletype === 'admin'
const isAdmin = roleAuthorization('admin')


app.get('/users', function(req, res) {
  // console.log(req.params.id);
  model.getAllUsers().then( (datas) => {
    res.send(datas.rows);
  }).catch(err => {
      res.send(err);
  });
});

app.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { prenom, nom } = req.body;
    model.updateUser(id, prenom, nom).then((data) => {
        res.json(data)
    }).catch(err => {
        res.send(err);
    });
});


app.get('/user/:id', checkTokenMiddleware, (req, res) => {
    const { id } = req.params;
    model.getUserById(id).then((data) => {
        res.json(data.rows)
    }).catch(err => {
        res.send(err);
    });
});

app.post('/user', checkTokenMiddleware, (req, res) => {
  // console.log('heyhey', req.body)
  const { firstname, lastname, email, pwd } = req.body;
    model.createUser({firstname, lastname, email, pwd})
      .then((data) => {
        res.json(data)
    }).catch(err => {
        res.send(err);
    });
});

app.delete('/user/:id', checkTokenMiddleware, (req, res) => {
    const { id } = req.params;
    console.log(req.params.id)
    model.deleteUser(id).then((data) => {
      console.log('data : ', data)
        res.json(data)
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
  }).catch(err => res.send(err) );
});

app.post('/login', checkCredentialsMiddleware, function(req, res) {
  // return res.send('coucou')
// checkCredentials(req.body.email, req.body.pwd)
// .then( user => {console.log('TEST :', user); return user})
// .then( () => res.send('Login Réussi'))
// .catch( err => res.json(err))

  res
    .status(200)
    .json({
      token: "bearer " + generateToken(req.user),
      user: {
        id: req.user.id,
        firstName: req.user.firstname,
        lastName: req.user.lastname
      }
    });
  });


module.exports = app;
