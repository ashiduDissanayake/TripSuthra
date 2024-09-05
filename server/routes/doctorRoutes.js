const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getDoctorInfoController, updateProfileController, getDoctorByIdController,  doctorAppoinmentController, updateStatusController } = require('../controllers/doctorCtrl');
const router = express.Router();

//POST SINGLE DOC INFO
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post('/updateProfile', authMiddleware, updateProfileController);

//POST GET SINGLE DOC INFO
router.post('/getDoctorById', authMiddleware, getDoctorByIdController);

//Get appoinments
router.get('/doctor-appoinments', authMiddleware, doctorAppoinmentController)

//POST update ststus
router.post('/update-status', authMiddleware, updateStatusController)

module.exports = router;