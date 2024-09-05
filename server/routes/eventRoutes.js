const express = require('express');
const { getAllEvents } = require('../controllers/eventController');

const router = express.Router();

// Route to fetch all events
router.get('/events', getAllEvents);

module.exports = router;
