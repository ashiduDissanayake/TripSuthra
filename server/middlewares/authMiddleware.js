const jwt = require('jsonwebtoken');
const JWT_SECRET = 'MrASH12345';

// Verify JWT token and role
const verifyToken = (roles = []) => (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });

  jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });

    req.user = decoded;

    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ error: 'Forbidden: You do not have the required role' });
    }

    next();
  });
};

module.exports = verifyToken;
