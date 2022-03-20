const { PostCategory } = require('../models');

const create = async (categoryIds, postId) => {
  await Promise.all(
    categoryIds.map((categoryId) => PostCategory.create({ categoryId, postId })),
  );
};

module.exports = {
  create,
};
