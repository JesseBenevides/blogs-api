const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const findAll = async () => {
  const users = await User.findAll();
  if (!users) {
    return { status: 404, message: 'users not found' };
  }
  return { status: 200, data: users };
};

const create = async ({ displayName, email, password, image }) => {
  const alreadyExists = await User.findOne({ where: { displayName } });

  if (alreadyExists) {
    return { status: 409, message: 'User already registered' };
  }

  const newUser = await User.create({ displayName, email, password, image });

  const token = generateToken({ id: newUser.id, displayName, email });

  return { status: 201, data: newUser, token };
};

const getUser = async ({ displayName, id, email }) => {
  const user = await User.findOne({ where: { displayName, id, email } });
  return user;
};

module.exports = {
  findAll,
  create,
  getUser,
};