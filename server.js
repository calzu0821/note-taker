const express = require('express'); // express module to create an express applciation
const path = require('path'); // module to handle file paths
const apiRoutes = require('./routes/apiroutes'); // module which contains API-related routes
const htmlRoutes = require('./routes/htmlRoutes'); // module which contains HTML-related routes

const app = express(); // create an express application by calling express() and assign it to the app variable
const PORT = process.env.PORT || 3000; // check if there's a port environment variable defined and if not, default to port 3000.

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // middleware is used to serve static files from the 'public' directory. This allows serving static assets like HTML, CSS, and client-side JavaScript.

// API routes
app.use('/api', apiRoutes);

// HTML routes
app.use('/', htmlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});