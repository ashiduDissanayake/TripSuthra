const express = require('express');
const Feedback = require('../models/feedbackModel');


const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll({
        limit: 4,
    });
    res.status(200).send({
      success: true,
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Error fetching feedback: ${error.message}`,
    });
  }
};



module.exports = {
    getAllFeedbacks,
  };
  
