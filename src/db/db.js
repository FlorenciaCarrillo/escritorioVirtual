const knex = require("knex");
const db = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'admin',
      database : 'db_tareas'
    }

})


module.exports = db;