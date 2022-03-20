const postSchema = require('../schemas/PostSchema');
const getErrorObj = require('../utils/getErrorObj');

const validatePost = (req, _res, next) => {
  const { error } = postSchema.validate(req.body);

  if (error) {
    const errorObj = getErrorObj(error);
    return next(errorObj);
  }
  next();
};

module.exports = validatePost;