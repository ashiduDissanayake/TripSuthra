const express = require('express');
const corsMiddleware = require('./middlewares/corsMiddleware');
const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

// Apply middleware
app.use(corsMiddleware);
app.use(express.json());


// Routes
app.use('/api', eventRoutes);
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
