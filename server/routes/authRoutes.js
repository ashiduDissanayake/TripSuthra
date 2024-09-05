const express = require('express');
const { signup, login, getAllUsers, updateUserRole, deleteUser } = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Register new user
router.post('/signup', signup);

// Login existing user
router.post('/login', login);

// Admin-only routes
router.get('/users', verifyToken(['admin']), getAllUsers);
router.put('/users/role', verifyToken(['admin']), updateUserRole);
router.delete('/users', verifyToken(['admin']), deleteUser);

module.exports = router;
