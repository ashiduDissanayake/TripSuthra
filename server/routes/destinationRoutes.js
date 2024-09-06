const express = require("express");
const {
  createDestinationController,
  getAllDestinationsController,
  getDestinationByIdController,
  updateDestinationController,
  deleteDestinationController,
  getTrendingDestinationsController,
} = require("../controllers/destinationCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// routes
// Create Destination || POST
router.post("/create-destination", authMiddleware, createDestinationController);

// Get All Destinations || GET
router.get("/get-destinations", authMiddleware, getAllDestinationsController);

// Get Destination By ID || GET
router.get(
  "/get-destination/:destinationId",
  authMiddleware,
  getDestinationByIdController
);

// Update Destination || PUT
router.put(
  "/update-destination/:destinationId",
  authMiddleware,
  updateDestinationController
);

// Delete Destination || DELETE
router.delete(
  "/delete-destination/:destinationId",
  authMiddleware,
  deleteDestinationController
);

// Get Trending Destinations || GET
router.get("/trending-destinations", getTrendingDestinationsController);

module.exports = router;
