const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

const generateToken = (data) => jwt.sign({ data }, SECRET, jwtConfig);

module.exports = generateToken;