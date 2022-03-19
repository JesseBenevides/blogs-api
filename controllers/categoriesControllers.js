const categoriesServices = require('../services/categoriesServices');

const findAll = async (_req, res, next) => {
  try {
    const result = await categoriesServices.findAll();

    if (result.data) return res.status(result.status).json(result.data);

    next(result);
  } catch (error) {
    next(error);
  }
};

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
  findAll,
};