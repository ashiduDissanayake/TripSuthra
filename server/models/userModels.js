const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the Sequelize instance

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Name is required' },
      notEmpty: { msg: 'Name cannot be empty' },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure emails are unique
    validate: {
      notNull: { msg: 'Email is required' },
      notEmpty: { msg: 'Email cannot be empty' },
      isEmail: { msg: 'Must be a valid email address' },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Password is required' },
      notEmpty: { msg: 'Password cannot be empty' },
    },
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isDriver: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isGuide: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  notification: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  seenNotification: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  tableName: 'users', // Optional: explicitly set the table name
  timestamps: true, // Enable createdAt and updatedAt
});

module.exports = User;
