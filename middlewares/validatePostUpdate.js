const postUpdateSchema = require('../schemas/postUpdateSchema');
const getErrorObj = require('../utils/getErrorObj');

const validatePostUpdate = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

  const { error } = postUpdateSchema.validate({ title, content });

  if (error) {
    const errorObj = getErrorObj(error);
    return next(errorObj);
  }
  next();
};

module.exports = validatePostUpdate;