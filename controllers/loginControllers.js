const loginServices = require('../services/loginServices');

const login = async (req, res, next) => {
  try {
    const result = await loginServices.login(req.body);
    if (result.token) {
      return res.status(result.status).json({ token: result.token });
    }
    next(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};