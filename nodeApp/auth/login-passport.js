const user = require("../model/userModel");
const { compare } = require("./pwd");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

/**
 * BAD !!! passport ne permet pas d'envoyer un message d'erreur custom
 * @param {*} email
 * @param {*} pwdEnClair
 * @param {*} done
 */
const checkCredentials = (email, pwdEnClair, done) => {
  return user
    .getUserByEmail(email)
    .then(
      user =>
        user
          ? compare(pwdEnClair, user.pwd).then(
              isMatch =>
                isMatch ? done(null, user) : done(null, false, "bad password")
            )
          : done(null, false, "bad email")
    )
    .catch(err => done(err));
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      pwdField: "pwd"
    },
    checkCredentials
  )
);

// expose le middleware qui valide le login
exports.authCredentials = passport.authenticate("local", {
  session: false
});
