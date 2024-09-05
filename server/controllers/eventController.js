const Event = require('../models/eventModel');

// Controller function to get all events
const getAllEvents = (req, res) => {
  Event.getAllEvents((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch events' });
    }
    res.json(results);
  });
};

module.exports = { getAllEvents };
