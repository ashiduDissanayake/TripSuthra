const { Sequelize } = require('sequelize');

// Initialize Sequelize with MySQL dialect
const sequelize = new Sequelize('tripSuthra', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',  // Specifies MySQL as the dialect
});

module.exports = sequelize;
