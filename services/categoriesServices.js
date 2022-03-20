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

const validateCategories = async (categoryIds) => {
  const validCategories = await Category.findAll();
  const validCategoryIds = validCategories.map(({ id }) => id);

  const isValid = categoryIds.every((id) => validCategoryIds.includes(id));
  
  return isValid;
};

module.exports = {
  create,
  findAll,
  validateCategories,
};