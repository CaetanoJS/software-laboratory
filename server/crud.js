const Pool = require('pg').Pool
const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sw_lab_db',
  password: '123',
  port: 5432,
})
const getUsers = (req, res) => {
    db.query('SELECT * FROM caetano_schema.users ORDER BY name ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

module.exports = {
    getUsers
}