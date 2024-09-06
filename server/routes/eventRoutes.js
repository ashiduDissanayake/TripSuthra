const express = require('express');
const { 
  createEventController, 
  getAllEventsController, 
  getEventByIdController, 
  updateEventController, 
  deleteEventController,
  getTrendingEventsController
} = require('../controllers/eventCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

// router object
const router = express.Router();

// routes
// Create Event || POST
router.post('/create-event', authMiddleware, createEventController);

// Get All Events || GET
router.get('/get-events', authMiddleware, getAllEventsController);

// Get Event By ID || GET
router.get('/get-event/:eventId', authMiddleware, getEventByIdController);

// Update Event || PUT
router.put('/update-event/:eventId', authMiddleware, updateEventController);

// Delete Event || DELETE
router.delete('/delete-event/:eventId', authMiddleware, deleteEventController);

// Get Trending Events || GET
router.get('/trending-events', getTrendingEventsController);


module.exports = router;
