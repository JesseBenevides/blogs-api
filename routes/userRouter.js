const express = require('express');
const validateUser = require('../middlewares/validateUser');
const userControllers = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const userRouter = express.Router();

userRouter.get(
  '/',
  authMiddleware,
  userControllers.findAll,
);

userRouter.get(
  '/:id',
  authMiddleware,
  userControllers.findById,
);

userRouter.post(
  '/',
  validateUser,
  userControllers.create,
);

module.exports = userRouter;