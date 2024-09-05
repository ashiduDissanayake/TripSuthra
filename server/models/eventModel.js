const db = require('../config/db');

// Function to fetch all events
const getAllEvents = (callback) => {
  const sql = `
    SELECT name AS eventName
    FROM events
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { getAllEvents };
