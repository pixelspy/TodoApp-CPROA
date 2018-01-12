const pwd = require('../auth/pwd.js')
const user = require('../model/userModel.js')
xtest('PWD encode', () => {
  return pwd
  .encode('coucou')
  .then( hash => expect(hash).toBeDefined());
})

xtest('PWD compare true', () => {
  return pwd
  .encode('coucou')
  .then( hash => pwd.comparePassword('coucou', '$2a$05$LdzYf093EQa045EsL./5Le38mrz4TZJcgmeH4YTwQnpfN9Lkt/N02'))
  .then( isMatch => expect(isMatch).toBe(true));
})

xtest('PWD compare false', () => {
   return pwd
  .encode('coucou')
  .then( hash => pwd.comparePassword('kiki', hash))
  .then( isMatch => expect(isMatch).toBe(false));
})

xtest('PWD compare log', () => {
  return pwd.encode("coucou").then( hash => console.log(hash))
})

test('PWD compare with email', () => {
  return user
  .getUserByEmail('git@gmail.com')
  .then((user) => {console.log(user); return user})
  .then( user => pwd.comparePassword('coucou', user.pwd))
  .then( isMatch => expect(isMatch).toBe(true));
})
