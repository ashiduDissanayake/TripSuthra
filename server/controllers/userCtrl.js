const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const dotenv = require('dotenv');

// dotenv config
dotenv.config();
// register callback
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register controller ${error.message}`,
    });
  }
};

// login callback
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invalid Email or Password", success: false });
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in login CTRL ${error.message}` });
  }
};


const authController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).send({ message: 'Token is missing', success: false });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded:', decoded);  // Debugging line

    if (!decoded || !decoded.email) {
      return res.status(401).send({ message: 'Invalid token', success: false });
    }

    const user = await userModel.findOne({ where: { email: decoded.email } });
    if (!user) {
      return res.status(404).send({ message: 'User not found', success: false });
    }

    user.password = undefined;
    res.status(200).send({ success: true, data: user });
    console.log('User:', user);  // Debugging line
  } catch (error) {
    console.error('AuthController Error:', error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).send({ message: 'Token expired', success: false });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).send({ message: 'Invalid token', success: false });
    }
    res.status(500).send({ message: 'Auth error', success: false, error });
  }
};



//notification controller

const getAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    const seennotification = user.seennotification;
    const notification = user.notification;
    seennotification.push(...notification);
    user.notification = [];
    user.seennotification = notification;
    const updatedUser = await user.save();
    res.status(200).send({
      success: true,
      message: "all notification marked as read",
      data: updatedUser,
    });
  } catch (error) {
    consol.log(error);
    res.status(500).send({
      message: "Error in notification",
      success: false,
      error,
    });
  }
};

//delete notification
const deleteAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    user.notification = [];
    user.seennotification = [];
    const updatedUser = await user.save();
    updatedUser.password = undefined;
    res.status(200).send({
      success: true,
      message: "Notification Deleted successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "unable to delete all notification",
    });
  }
};

module.exports = {
  loginController,
  registerController,
  authController,
  getAllNotificationController,
  deleteAllNotificationController,
};
