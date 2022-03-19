const express = require('express');
const categoriesControllers = require('../controllers/categoriesControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const categoriesRouter = express.Router();

categoriesRouter.post(
  '/',
  authMiddleware,
  categoriesControllers.create,
);

module.exports = categoriesRouter;