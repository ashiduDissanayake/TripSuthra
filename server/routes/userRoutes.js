const express = require('express');
const { loginController, registerController, authController,getAllNotificationController, deleteAllNotificationController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');


// router object
const router = express.Router();

// routes
// Login || POST
router.post('/login', loginController);

// Register || POST
router.post('/register', registerController);

// Auth || POST
router.post('/getUserData', authMiddleware, authController);

// Notification Doctor || POST
router.post('/get-all-notification', authMiddleware, getAllNotificationController);

// Notification Doctor || POST
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController);

module.exports = router;