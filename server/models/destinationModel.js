const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the Sequelize instance

// Define the Destination model
const Destination = sequelize.define('Destination', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Destination title is required' },
      notEmpty: { msg: 'Destination title cannot be empty' },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: { msg: 'Description is required' },
      notEmpty: { msg: 'Description cannot be empty' },
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Location is required' },
      notEmpty: { msg: 'Location cannot be empty' },
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true, // Allow optional image URL
    validate: {
      isUrl: { msg: 'Must be a valid URL' },
    },
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0, // Default rating of 0.0
    validate: {
      min: 0,
      max: 5, // Ratings should be between 0 and 5 stars
      isFloat: { msg: 'Rating must be a float between 0 and 5' },
    },
  },
  reviews: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // Default to 0 reviews
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notNull: { msg: 'Distance is required' },
      isFloat: { msg: 'Distance must be a float' },
    },
  },
});

// Define the Review model for destination reviews
const Review = sequelize.define('Review', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Name is required' },
      notEmpty: { msg: 'Name cannot be empty' },
    },
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: { msg: 'Comment is required' },
      notEmpty: { msg: 'Comment cannot be empty' },
    },
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 5, // Ratings should be between 0 and 5 stars
      isFloat: { msg: 'Rating must be a float between 0 and 5' },
    },
  },
});

// Define the association between Destination and Review models
Destination.hasMany(Review, { onDelete: 'CASCADE' });
Review.belongsTo(Destination);

module.exports = { Destination, Review };