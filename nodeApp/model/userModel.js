const client = require('./db.js')
const {encode} = require('../auth/pwd.js')

const user = {}

user.getAllUsers = () => {
  return client.query('SELECT * from users')
}

user.createUser = ({firstname, lastname, email, pwd}) => {
  return encode(pwd).then(hashPwd => client.query(`
    INSERT INTO users (firstname, lastname, email, pwd, roletype)
    VALUES ('${firstname}', '${lastname}', '${email}', '${hashPwd}', 'user')`))
}

user.getUserById = (id) => {
  // console.log(user)
  return client.query(`
    SELECT * from users WHERE id= ${id};
    `)
    // .then(result => result.rows[0])
}
user.updateUser = (id, prenom, nom) => {
  return client.query(`
    UPDATE users SET prenom = '${prenom}', nom = '${nom}' WHERE id= ${id};
    `)
}
user.deleteUser = (id) => {
  return client.query(`DELETE FROM users WHERE id= ${id};
    `)
}
user.getTodosByUserId = (id) => {
  return client.query(`
    SELECT todos.name from todos INNER JOIN users_todos ON user_id=${id} AND todos.id = todo_id;
    `)
}
user.noExists = (email) => {
  return client.query(`
  SELECT * FROM users WHERE email='${email}'
  `)
  .then(result => result.rows.length === 0 )
}

user.getUserByEmail = (email) => {
  return client.query(`SELECT * FROM users WHERE email='${email}'`)
  .then (data => data.rows[0] || false)
  .catch( err => Promise.reject(err))
}

module.exports = user;
