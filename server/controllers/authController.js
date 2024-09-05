const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'MrASH12345';

// Register new user
const signup = (req, res) => {
  const { firstName, lastName, email, password, role, passportNumber, phoneNumber, passportExpiryDate, passportIssuedDate, address, country, driverLicense } = req.body;

  User.createUser({ firstName, lastName, email, password, role, passportNumber, phoneNumber, passportExpiryDate, passportIssuedDate, address, country, driverLicense }, (err, result) => {
    if (err) return res.status(500).json({ error: 'Registration failed' });
    res.status(201).json({ message: 'User registered successfully' });
  });
};

// Login existing user
const login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, (err, user) => {
    if (err || !user) return res.status(401).json({ error: 'Invalid credentials' });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(401).json({ error: 'Invalid credentials' });

      // Generate JWT token
      const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    });
  });
};

// Admin-only route to get all users
const getAllUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch users' });
    res.json(users);
  });
};

// Admin-only route to update user role
const updateUserRole = (req, res) => {
  const { userId, newRole } = req.body;
  
  User.updateUserRole(userId, newRole, (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to update user role' });
    res.json({ message: 'User role updated successfully' });
  });
};

// Admin-only route to delete a user
const deleteUser = (req, res) => {
  const { userId } = req.body;

  User.deleteUser(userId, (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to delete user' });
    res.json({ message: 'User deleted successfully' });
  });
};

module.exports = { signup, login, getAllUsers, updateUserRole, deleteUser };
