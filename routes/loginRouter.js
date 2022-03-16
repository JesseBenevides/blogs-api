const express = require('express');
const validateLogin = require('../middlewares/validateLogin');
const loginControllers = require('../controllers/loginControllers');

const loginRouter = express.Router();

loginRouter.post(
  '/',
  validateLogin,
  loginControllers.login,
);

module.exports = loginRouter;