const express = require('express')
const cors = require('cors')
// cors : permets de gérer avec qui le serveur va accepter

const userController = require('./controller/userController')
const todoController = require('./controller/todoController')
const catController = require('./controller/catController')
const app = express()
// express est un router: un serveur web : gérer des routes

app.use(cors()); // enables ALL

app.use(express.json()) //ce middleware express parse le json envoyé en POST
// pour un formulaire classique le middleware est : express URLencoded
//middleware transformateur de JSON qui se trouverait dans le body

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Routes et Controller :
app.use('', userController)
app.use('', todoController)
app.use('', catController)
// middleware pour une route à laquelle j'attache un controller

/////////////////////////////////////////////////////////////////////////////////////////////////////

// création du serveur et connexion au port 3000

app.listen(3000, err => {
  // : app.listen(3000, function(err) {
  if(err) {
    console.log('No connexion');
  }
  console.log('Connexion good!');
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
