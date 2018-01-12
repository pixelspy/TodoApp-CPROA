// const userCard = require('../models/user.card')
const user = require("../model/userModel");

const authorizationErr = 'You are not authorized to view this content'

/**
 * Expose le middleware qui vérifie que
 * le rôle du user authentifié (req.user.roletype)
 * est bien dans les rôles authorisés (roles)
 * @param {array} roles
 */
exports.roleAuthorization = (...roles) => (req, res, next) => {
  // Grâce au middleware authJwt, on récupere le user
  console.log(req.user)
  return roles.indexOf(req.user.roletype) > -1
    ? next()
    : res.status(401).json({ error: authorizationErr })
}

/**
 * Expose le middleware qui vérifie que
 * le user authentifié (req.user.id)
 * est bien le propriétaire du compte (req.params.userId)
 */
// exports.ownAccount = (req, res, next) => {
//   // Grâce au middleware authJwt, on récupere le user
//   const userId = req.params.userId || req.body.userId
//   const isAdmin = req.user.roletype === 'admin'
//   const isOwner = req.user.id === +userId
//   console.log(+userId)
//   return isAdmin || isOwner
//     ? next()
//     : res.status(401).json({ error: authorizationErr })
// }

/**
 * Expose le middleware qui vérifie que
 * le userId (req.params.userId)
 * est bien associé à la carte (req.params.cardId)
 */
// exports.isCardAssociated = (req, res, next) => {
//   // Grâce au middleware authJwt, on récupere le user
//   if (req.user.roletype === 'admin') {
//     return next()
//   }
//
//   const userId = req.params.userId || req.body.userId
//   const cardId = req.params.cardId || req.body.cardId
//
//   userCard
//     .exist({ userId, cardId })
//     .then(() => next())
//     .catch(err => res.status(401).json(err))
// }
