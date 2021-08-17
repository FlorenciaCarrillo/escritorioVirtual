const knex = require("knex");
const db = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'mydb'
    }

})


module.exports = db;