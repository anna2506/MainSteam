const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const generatePasswordHash = async (password) => bcrypt.hash(password, SALT_ROUNDS);

const checkPassword = async (password, hash) => bcrypt.compare(password, hash);

module.exports = {
  generatePasswordHash,
  checkPassword,
};
