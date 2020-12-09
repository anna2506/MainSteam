const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mainsteam_db',
  password: '123654',
  port: 5432,
});

const getPlayerByLogin = async (login) => {
  const player = await pool.query('SELECT * FROM player WHERE login = $1', [login]);
  return player.rows[0];
};

const getPlayerByEmail = async (email) => {
  const player = await pool.query('SELECT * FROM player WHERE email = $1', [email]);
  return player.rows[0];
};

const savePlayer = async (login, email, hash, country, token) => {
  await pool.query(`
    INSERT INTO player (login, email, pass_hash, country, token)
    VALUES ($1, $2, $3, $4, $5)
  `, [login, email, hash, country, token]);
};

const getPlayerInfo = async (token) => {
  const player = await pool.query(`
    SELECT
      login, experience, country, email
    FROM player
    WHERE token = $1`,
  [token]);
  return player.rows[0];
};

const getGame = async (id) => {
  const game = await pool.query('SELECT * FROM game WHERE id = $1', [id]);
  return game.rows[0];
};

const getGames = async () => {
  const games = await pool.query('SELECT * FROM game');
  return games.rows;
};

const getPlayerGames = async (playerId) => {
  const playerGames = await pool.query(
    'SELECT * FROM player_game WHERE player_id = $1',
    [playerId],
  );
  return playerGames.rows[0];
};

const updatePlayer = async (login, experience, country, email, id) => {
  await pool.query(`
  UPDATE player SET login = $1, experience = $2, country = $3, email = $4 WHERE id = $4
  `, [login, experience, country, email, id]);
};

const savePlayerGame = async (
  playerId,
  gameId,
  timeSpent,
  highScore,
  beat100,
  beat200,
  beat400,
  beat700,
  beat1000,
  beat10000,
) => {
  await pool.query(`
    INSERT INTO player_game
    (
      player_id, game_id, time_spent, high_score, beat_100,
      beat_200, beat_400, beat_700, beat_1000, beat_10000
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    ON CONFLICT (player_id, game_id)
    DO UPDATE player_game
    SET 
      timeSpent = $3, highScore = $4, beat100 = $5,
      beat200 = $6, beat400 = $7, beat700 = $8,
      beat1000 = $9, beat10000 = $10 WHERE player_id = $11
  `,
  [
    playerId,
    gameId,
    timeSpent,
    highScore,
    beat100,
    beat200,
    beat400,
    beat700,
    beat1000,
    beat10000,
  ]);
};

const getRating = async () => {
  const rating = await pool.query(`
  SELECT login, experience, country FROM player ORDER BY experience
  `);
  return rating.rows;
};

module.exports = {
  getPlayerByLogin,
  getPlayerByEmail,
  savePlayer,
  getPlayerInfo,
  getGame,
  getGames,
  getPlayerGames,
  savePlayerGame,
  updatePlayer,
  getRating,
};
