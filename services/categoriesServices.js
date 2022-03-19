const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();
  if (!categories) {
    return { status: 404, message: 'categories not found' };
  }
  return { status: 200, data: categories };
};

const create = async (name) => {
  if (!name) return { status: 400, message: '"name" is required' };

  const newCategory = await Category.create({ name });

  if (newCategory) return { status: 201, data: newCategory };

  return { status: 500, message: 'Something went wrong' };
};

module.exports = {
  create,
  findAll,
};