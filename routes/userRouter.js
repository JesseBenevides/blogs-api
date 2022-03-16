const express = require('express');
const validateUser = require('../middlewares/validateUser');
const userControllers = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.get(
  '/',
  userControllers.findAll,
);

userRouter.post(
  '/',
  validateUser,
  userControllers.create,
);

module.exports = userRouter;