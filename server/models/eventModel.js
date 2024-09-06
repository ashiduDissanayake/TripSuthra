const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the Sequelize instance

// Define the Event model
const Event = sequelize.define('Event', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Event title is required' },
      notEmpty: { msg: 'Event title cannot be empty' },
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: { msg: 'Date is required' },
      isDate: { msg: 'Must be a valid date' },
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
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: { msg: 'Description is required' },
      notEmpty: { msg: 'Description cannot be empty' },
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
    type: DataTypes.STRING,
    allowNull: true, // Optional distance
  },
}, {
  tableName: 'events', // Explicit table name
  timestamps: true,    // Enable createdAt and updatedAt
});

// Define the Review model for event reviews
const Review = sequelize.define('Review', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Reference to User model
      key: 'id',
    },
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'events', // Reference to Event model
      key: 'id',
    },
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
      isFloat: { msg: 'Rating must be a float between 0 and 5' },
    },
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true, // Optional comment
  },
}, {
  tableName: 'reviews', // Explicit table name for reviews
  timestamps: true,
});

// Set associations between Event and Review
Event.hasMany(Review, { foreignKey: 'eventId' });
Review.belongsTo(Event, { foreignKey: 'eventId' });

module.exports = { Event, Review };
