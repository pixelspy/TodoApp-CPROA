const jwt = require("jsonwebtoken");
const user = require("../model/userModel");
const secret = process.env.JWT_SECRET;
const tokenErr = "Vous n'avez pas les droits pour accéder à ce service";
const JWT_SECRET = 'coucou'
//Doc. https://github.com/auth0/node-jsonwebtoken

/**
 * expose la fonction de génération du token
 * NB. expire dans 10800s => 3 heures
 * @param {Object} userInfo
 */
exports.generateToken = user => {
  const {id, email, roletype} = user
  const userInfo = { id, email, role: roletype }
  return jwt.sign(userInfo, JWT_SECRET, { expiresIn: 10800 });
}

/**
 * Extrait le token du header
 * Autrement, vous pouvez aussi utiliser : https://github.com/tkellen/js-express-bearer-token
 * @param {*} headerValue
 */
const extractBearerToken = (headerValue) => {
  if (typeof headerValue !== "string") {
    return false;
  }
  const matches = headerValue.match(/(bearer)\s+(\S+)/i);
  return matches && matches[2];
}
exports.extractBearerToken = extractBearerToken;

/**
 * Middleware pour verifier le token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.checkTokenMiddleware = (req, res, next) => {

  const token = req.headers
    && req.headers.authorization
    && extractBearerToken(req.headers.authorization);

  if(!token) {
    res.status(403).json({error:tokenErr})
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ error: tokenErr });
    }

    // Vérifie que l'id du token correspond bien à un utilisateur en BDD
    // peut mieux faire avec le pwd plutôt que l'ID
    user
      .getUserById(decoded.id)
      .then(user => {
        if (!user) {
          res.status(403).json({ error: tokenErr });
        }

        req.user = user;
        next();
      })
      .catch(err => res.status(403).json({ error: err }));
  });
}
