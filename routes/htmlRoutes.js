const express = require('express');
const path = require('path');

const router = express.Router();

// root URL '/'
// When these routes are accessed with a GET request, the corresponding HTML files (index.html and notes.html) are sent back as the response.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// '/notes' URL
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;