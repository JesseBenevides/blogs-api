const express = require('express');
const validatePost = require('../middlewares/validatePost');
const blogPostControllers = require('../controllers/blogPostControllers');
const authMiddleware = require('../middlewares/authMiddleware');
const validatePostUpdate = require('../middlewares/validatePostUpdate');
const validateUserPost = require('../middlewares/validateUserPost');

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

blogPostRouter.get(
  '/:id',
  authMiddleware,
  blogPostControllers.findById,
);

blogPostRouter.put(
  '/:id',
  authMiddleware,
  validateUserPost,
  validatePostUpdate,
  blogPostControllers.update,
);

module.exports = blogPostRouter;