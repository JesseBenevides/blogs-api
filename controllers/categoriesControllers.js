const categoriesServices = require('../services/categoriesServices');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await categoriesServices.create(name);

    if (result.data) return res.status(result.status).json(result.data);

    next(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};