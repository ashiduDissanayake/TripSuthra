const express = require("express");
const sequelize = require("./config/db"); // Import the Sequelize instance
const cors = require("cors");
require('dotenv').config();

// Initialize the app
const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // If you're using cookies
  })
);

// Middleware (if needed)
app.use(express.json());

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/event", require("./routes/eventRoutes"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synchronized successfully.");
    // Start the server after syncing
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });
