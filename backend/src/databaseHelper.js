const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mainsteam_db',
  password: '123654',
  port: 5432,
});

const getUserByLogin = async (login) => {
  const users = await pool.query('SELECT * FROM player WHERE login = $1', [login]);
  return users.rows && users.rows[0];
};

const getUserByEmail = async (email) => {
  const users = await pool.query('SELECT * FROM player WHERE email = $1', [email]);
  return users.rows && users.rows[0];
};

const saveUser = async (login, email, hash, country, token) => {
  await pool.query(`
    INSERT INTO player (login, email, pass_hash, country, token)
    VALUES ($1, $2, $3, $4, $5)
  `, [login, email, hash, country, token]);
};

module.exports = {
  getUserByLogin,
  getUserByEmail,
  saveUser,
};
