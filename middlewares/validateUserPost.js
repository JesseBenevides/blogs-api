const blogPostServices = require('../services/blogPostServices');

const validateUserPost = async (req, res, next) => {
  try {
    const { id } = req.params;
  const { id: userId } = req.user;

  const { status, data, message } = await blogPostServices.findById(id);

  if (message) return res.status(status).json({ message });

  if (userId !== data.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateUserPost;