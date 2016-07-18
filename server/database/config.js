require('dotenv').config();

const knex = require('knex');

const db = {
  client: 'pg',
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
};

console.error('CONFIG JS')
module.exports = {
  db: knex(db)
};