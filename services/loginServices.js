const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return { status: 400, message: 'Invalid fields' };
  }

  const { id, displayName } = user;
  const token = generateToken({ id, email, displayName });

  return { status: 200, data: user, token };
};

module.exports = {
  login,
};