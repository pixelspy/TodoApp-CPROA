const user = require('../model/userModel')
const { checkCredentials } = require('../auth/login')

// test avec la méthode getAllUsers de mon model userModel
xtest('Get User', () => {
  return user
  .getAllUsers()
  .then( db => expect(db)
  .toBeDefined());
})

xtest('getUsers return at least 1 item', () => {
  return user
  .getAllUsers()
  .then(results => expect(results.rows.length)
  .toBeGreaterThan(0));
})

// test('getUserById with firstname and lastname', () => {
//   return user
//   .getAllUsers()
//   .then(results => expect(results.rows))
// })

xtest('noExist return true for coucou@coucou.fr', () => {
  return user
  .noExists('coucou@coucou.fr')
  .then(
    result => {
      console.log('test', result);
      return expect(result).toBe(true)
    }
    );
})

xtest('getUserByEmail return object user by email', () => {
  return user
  .getUserByEmail('do@do.do')
  .then(result => {
    console.log('getUserByEmail', result);
    return expect(result).toBeDefined()
  }
);
})
xtest('getUserByEmail return an error for fake email', () => {
  return user
  .getUserByEmail('fake@do.do')
  .rejects;
  // .catch( err => expect(err).toBeUndefined()
  // .then(result => {
  //   console.log('getUserByEmail FAKE :', result);
  //   return expect(result).toBe(true)
  // }

})
xtest('checkCredentials', () => {
  return user
  .checkCredentials('do@do.do')
})

xtest('createUser insert un user avec un pwd chiffré', () => {
  return user.createUser({firstname: 'Laurenne', lastname: 'Chiffer', email: 'test@gmail.com', pwd: 'coucou'})
  .then( data => console.log('create user data : ', data))

})
