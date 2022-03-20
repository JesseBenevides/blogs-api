const { BlogPost, Category, User } = require('../models');
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

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  return { status: 200, data: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  if (!post) return { status: 404, message: 'Post does not exist' };
  
  return { status: 200, data: post };
};

const update = async ({ id, title, content }) => {
  const post = await BlogPost.findByPk(id);

  if (!post) return { status: 404, message: 'Post does not exist' };

  await BlogPost.update({ title, content }, { where: { id } });

  const result = await findById(id);
  return result;
};

module.exports = {
  create,
  findAll,
  findById,
  update,
};