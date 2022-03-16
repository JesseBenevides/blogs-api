const jwt = require('jsonwebtoken');
const { getUser } = require('../services/userServices');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const SECRET = process.env.JWT_SECRET;

    const decoded = jwt.verify(token, SECRET);

    const user = await getUser(decoded.data);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user;
  
    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return next({ status: 401, message: 'Expired or invalid token' });
    }

    next(error);
  }
};

module.exports = authMiddleware;