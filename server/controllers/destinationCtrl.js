const destinationModel = require("../models/destinationModel");
const userModel = require("../models/userModels"); // Assuming users can create or interact with events
const moment = require("moment");
const { Destination } = require("../models/destinationModel");

// Create Destination
const createDestinationController = async (req, res) => {
  try {
    const { title, description, location } = req.body;

    // Check if the user is authenticated
    const user = await userModel.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(401).send({ message: "Unauthorized", success: false });
    }

    // Create new destination
    const newDestination = new destinationModel({
      title,
      description,
      location,
      createdBy: user.id,
    });

    await newDestination.save();
    res.status(201).send({
      success: true,
      message: "Destination created successfully",
      data: newDestination,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Create destination controller ${error.message}`,
    });
  }
};

// Get All Destinations
const getAllDestinationsController = async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.status(200).send({
      success: true,
      data: destinations,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Get destinations controller ${error.message}`,
    });
  }
};

// Get Destination By ID
const getDestinationByIdController = async (req, res) => {
  try {
    const destination = await Destination.findOne({
      where: { id: req.params.destinationId },
    });
    if (!destination) {
      return res
        .status(404)
        .send({ message: "Destination not found", success: false });
    }

    res.status(200).send({
      success: true,
      data: destination,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Get destination by ID controller ${error.message}`,
    });
  }
};

// Update Destination
const updateDestinationController = async (req, res) => {
  try {
    const { title, description, location } = req.body;
    const destination = await Destination.findOne({
      where: { id: req.params.destinationId },
    });
    if (!destination) {
      return res
        .status(404)
        .send({ message: "Destination not found", success: false });
    }

    // Check if the user is authenticated
    const user = await userModel.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(401).send({ message: "Unauthorized", success: false });
    }

    // Check if the user is the owner of the destination
    if (destination.createdBy !== user.id) {
      return res.status(401).send({ message: "Unauthorized", success: false });
    }

    destination.title = title;
    destination.description = description;
    destination.location = location;
    await destination.save();
    res.status(200).send({
      success: true,
      message: "Destination updated successfully",
      data: destination,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Update destination controller ${error.message}`,
    });
  }
};

// Delete Destination
const deleteDestinationController = async (req, res) => {
  try {
    const destination = await Destination.findOne({
      where: { id: req.params.destinationId },
    });
    if (!destination) {
      return res
        .status(404)
        .send({ message: "Destination not found", success: false });
    }

    // Check if the user is authenticated
    const user = await userModel.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(401).send({ message: "Unauthorized", success: false });
    }

    // Check if the user is the owner of the destination
    if (destination.createdBy !== user.id) {
      return res.status(401).send({ message: "Unauthorized", success: false });
    }

    await destination.destroy();
    res.status(200).send({
      success: true,
      message: "Destination deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Delete destination controller ${error.message}`,
    });
  }
};

// Get Trending Destinations
const getTrendingDestinationsController = async (req, res) => {
  try {
    
    const destinations = await Destination.findAll({
      order: [["rating", "DESC"]],
      limit: 4,
    });
    res.status(200).send({
      success: true,
      data: destinations,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Get trending destinations controller ${error.message}`,
    });
  }
};

module.exports = {
  createDestinationController,
  getAllDestinationsController,
  getDestinationByIdController,
  updateDestinationController,
  deleteDestinationController,
  getTrendingDestinationsController,
};
