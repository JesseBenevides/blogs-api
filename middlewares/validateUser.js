const userSchema = require('../schemas/userSchema');
const getErrorObj = require('../utils/getErrorObj');

const validateUser = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    const errorObj = getErrorObj(error);
    return next(errorObj);
  }
  next();
};

module.exports = validateUser;