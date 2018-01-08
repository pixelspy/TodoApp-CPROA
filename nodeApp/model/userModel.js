const client = require('./db.js')

module.exports = {
  getAllUsers() {
    return client.query('SELECT * from users')
  },

  createUser(prenom, nom) {
    return client.query(`INSERT INTO users(id, prenom, nom) VALUES (DEFAULT, '${prenom}', '${nom}');`)
  },

  getUserById(id) {
    return client.query(`SELECT * from users WHERE id= ${id};`)
  },

  updateUser(id, prenom, nom) {
    return client.query(`UPDATE users SET prenom = '${prenom}', nom = '${nom}' WHERE id= ${id};`)
  },

  deleteUser(id) {
    return client.query(`DELETE FROM users WHERE id= ${id};`)
  },
  getTodosByUserId(id) {
    return client.query(`SELECT todos.name from todos INNER JOIN users_todos ON user_id=${id} AND todos.id = todo_id;`)
  }
  noExist(email) {
    return client.query(`
    SELECT COUNT(*) FROM users WHERE email='${email}'
    `)
  }
}
