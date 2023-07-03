const express = require('express');
const path = require('path');

const router = express.Router();

// root URL '/'
// When a GET request is made to this URL, the server responds by sending the file located at "../public/index.html" to the client. The res.sendFile() method is used to send the file.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// '/notes' URL
// When a GET request is made to this URL, the server responds by sending the file located at "../public/notes.html" to the client.
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// In both cases, the path.join() method is used to construct the file path. The __dirname variable represents the current directory of the script file, and ../ is used to move up one level in the directory hierarchy. By joining these components with the file names, the complete file paths are obtained.

module.exports = router;

// When these routes are accessed with a GET request, the corresponding HTML files (index.html and notes.html) are sent back as the response. The path module is used to construct the absolute paths of these HTML files.