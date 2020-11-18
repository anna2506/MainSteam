const jwt = require('jsonwebtoken');

const SECRET = 'Santa_Claus_Does_Not_Exist';

const generateToken = (login, email) => {
  const data = { login, email };
  return jwt.sign(data, SECRET);
};

const checkToken = (token) => jwt.verify(token, SECRET);

module.exports = {
  generateToken,
  checkToken,
};
