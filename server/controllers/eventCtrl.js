const eventModel = require("../models/eventModel");
const userModel = require("../models/userModels"); // Assuming users can create or interact with events
const moment = require("moment");
const { Event } = require("../models/eventModel");

// Create Event
const createEventController = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    
    // Check if the user is authenticated
    const user = await userModel.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(401).send({ message: "Unauthorized", success: false });
    }

    // Create new event
    const newEvent = new eventModel({
      title,
      description,
      date: moment(date).format("YYYY-MM-DD HH:mm"),
      location,
      createdBy: user.id
    });

    await newEvent.save();
    res.status(201).send({
      success: true,
      message: "Event created successfully",
      data: newEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Create event controller ${error.message}`,
    });
  }
};

// Get All Events
const getAllEventsController = async (req, res) => {
  try {
    const events = await eventModel.findAll();
    res.status(200).send({
      success: true,
      data: events,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Get events controller ${error.message}`,
    });
  }
};

// Get Event By ID
const getEventByIdController = async (req, res) => {
  try {
    const event = await eventModel.findOne({
      where: { id: req.params.eventId }
    });

    if (!event) {
      return res.status(404).send({ message: "Event not found", success: false });
    }

    res.status(200).send({
      success: true,
      data: event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Get event by ID controller ${error.message}`,
    });
  }
};

// Get Trending Events
const getTrendingEventsController = async (req, res) => {
    try {
      const trendingEvents = await Event.findAll({
        order: [['rating', 'DESC']],
        limit: 4,
      });
      
      res.status(200).send({
        success: true,
        data: trendingEvents,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Get trending events controller ${error.message}`,
      });
    }
  };
  

// Update Event
const updateEventController = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { title, description, date, location } = req.body;

    // Find event by ID
    let event = await eventModel.findOne({
      where: { id: eventId }
    });

    if (!event) {
      return res.status(404).send({ message: "Event not found", success: false });
    }

    // Update event details
    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date ? moment(date).format("YYYY-MM-DD HH:mm") : event.date;
    event.location = location || event.location;

    await event.save();

    res.status(200).send({
      success: true,
      message: "Event updated successfully",
      data: event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Update event controller ${error.message}`,
    });
  }
};

// Delete Event
const deleteEventController = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Find event by ID
    const event = await eventModel.findOne({
      where: { id: eventId }
    });

    if (!event) {
      return res.status(404).send({ message: "Event not found", success: false });
    }

    // Delete the event
    await event.destroy();

    res.status(200).send({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Delete event controller ${error.message}`,
    });
  }
};

module.exports = {
  createEventController,
  getAllEventsController,
  getEventByIdController,
  updateEventController,
  deleteEventController,
  getTrendingEventsController,
};
