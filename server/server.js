const express = require('express');
const sequelize = require('./config/db'); // Import the Sequelize instance

// Initialize the app
const app = express();
const port = process.env.PORT || 3000;

// Middleware (if needed)
app.use(express.json());

// Define routes (simple test route)
app.get('/', (req, res) => {
  res.send('Server is running and connected to the database.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
