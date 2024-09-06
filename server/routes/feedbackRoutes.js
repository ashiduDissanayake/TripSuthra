const express = require('express');
const { 
    getAllFeedbacks,
  } = require('../controllers/feedbackCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

// router object
const router = express.Router();

// routes
// Get All Feedbacks || GET
router.get('/get-feedbacks', authMiddleware, getAllFeedbacks);

module.exports = router;
