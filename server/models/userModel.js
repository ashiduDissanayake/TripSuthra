const db = require('../config/db');
const bcrypt = require('bcrypt');

// Create a new user
const createUser = (userData, callback) => {
  const { firstName, lastName, email, password, role, passportNumber, phoneNumber, passportExpiryDate, passportIssuedDate, address, country, driverLicense } = userData;

  // Hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return callback(err);

    const sql = `INSERT INTO users (first_name, last_name, email, password, role, passport_number, phone_number, passport_expiry_date, passport_issued_date, address, country, driver_license)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    db.query(sql, [firstName, lastName, email, hash, role, passportNumber, phoneNumber, passportExpiryDate, passportIssuedDate, address, country, driverLicense], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  });
};

// Find a user by email
const findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

// Fetch all users (Admin-only)
const getAllUsers = (callback) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Update user role (Admin action)
const updateUserRole = (userId, newRole, callback) => {
  const sql = 'UPDATE users SET role = ? WHERE id = ?';
  db.query(sql, [newRole, userId], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Delete a user (Admin action)
const deleteUser = (userId, callback) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

module.exports = { createUser, findUserByEmail, getAllUsers, updateUserRole, deleteUser };
