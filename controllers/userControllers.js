const userServices = require('../services/userServices');

const findAll = async (_req, res, next) => {
    try {
      const result = await userServices.findAll();
      if (result.data) {
        return res.status(result.status).json(result.data);
      }
      next(result);
    } catch (error) {
      next(error);
    }
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await userServices.findById(id);

    if (result.data) {
      return res.status(result.status).json(result.data);
    }

    next(result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await userServices.create(req.body);
    if (result.token) {
      return res.status(result.status).json({ token: result.token });
    }
    next(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAll,
  create,
  findById,
};