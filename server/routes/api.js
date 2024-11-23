// server/routes/api.js
const express = require('express');
const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Add more routes as needed

module.exports = router;
