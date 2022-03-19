const { Category } = require('../models');

const create = async (name) => {
  if (!name) return { status: 400, message: '"name" is required' };

  const newCategory = await Category.create({ name });

  if (newCategory) return { status: 201, data: newCategory };

  return { status: 500, message: 'Something went wrong' };
};

module.exports = {
  create,
};