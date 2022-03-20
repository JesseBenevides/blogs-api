const express = require('express');
const validatePost = require('../middlewares/validatePost');
const blogPostControllers = require('../controllers/blogPostControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const blogPostRouter = express.Router();

blogPostRouter.post(
  '/',
  authMiddleware,
  validatePost,
  blogPostControllers.create,
);

blogPostRouter.get(
  '/',
  authMiddleware,
  blogPostControllers.findAll,
);

module.exports = blogPostRouter;