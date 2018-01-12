/////////////////////////////////////////////////////////////////////////////////////////////////////
// Connexion à la BDD :

const { Client } = require('pg')
// pg : postrgsql, qu'on trouve dans package.json
// client postrgsql pas client coté serveur


const client = new Client({
  connectionString: 'postgresql://postgres:changeme@localhost:5432/tododb'
  // const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
})
client.connect().then( () => {
  console.log('successfully connected')}).catch( (err) => {
  console.log('error:', err)
})

module.exports = client;
