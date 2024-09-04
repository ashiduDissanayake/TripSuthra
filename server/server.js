const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'tripSuthra',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Route to get all events with detailed information
app.get('/events', (req, res) => {
  const sql = `
    SELECT name AS eventName, image AS imageUrl from events inner join 

  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch events' });
    }
    res.json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
