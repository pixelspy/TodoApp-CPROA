const pwd = require('../auth/pwd.js')

xtest('PWD encode', () => {
  return pwd
  .encode('coucou')
  .then( hash => expect(hash).toBeDefined());
})

test('PWD compare true', () => {
  return pwd
  .encode('coucou')
  .then( hash => pwd.compare('coucou', hash))
  .then( isMatch => expect(isMatch).toBe(true));
})

test('PWD compare false', () => {
   return pwd
  .encode('coucou')
  .then( hash => pwd.compare('kiki', hash))
  .then( isMatch => expect(isMatch).toBe(false));
})
