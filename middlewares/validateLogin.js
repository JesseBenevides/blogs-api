const loginSchema = require('../schemas/loginSchema');
const getErrorObj = require('../utils/getErrorObj');

const validateLogin = (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    const errorObj = getErrorObj(error);
    return next(errorObj);
  }
  next();
};

module.exports = validateLogin;