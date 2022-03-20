const blogPostServices = require('../services/blogPostServices');

const create = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { title, content, categoryIds } = req.body;
    const post = { title, content, userId };

    const result = await blogPostServices.create(post, categoryIds);

    if (result.data) return res.status(result.status).json(result.data);

    next(result);
  } catch (error) {
    next(error);
  }
};

const findAll = async (_req, res, next) => {
  try {
    const { status, data } = await blogPostServices.findAll();
    return res.status(status).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  findAll,
};