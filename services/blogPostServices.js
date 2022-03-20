const { BlogPost } = require('../models');
const { validateCategories } = require('./categoriesServices');
const PostCategoryServices = require('./postCategoryServices');

const create = async (post, categoryIds) => {
  const areCategoriesValid = await validateCategories(categoryIds);

  if (!areCategoriesValid) return { status: 400, message: '"categoryIds" not found' };

  const { id, userId, content, title } = await BlogPost.create(post);

  const newPost = { id, userId, content, title };

  await PostCategoryServices.create(categoryIds, newPost.id);

  return { status: 201, data: newPost };
};

module.exports = {
  create,
};