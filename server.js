// Dependencies
const express = require('express');
const path = require('path');

// Import custom route modules
const api_routes = require('./express-notes/routes/api-routes');
const html_routes = require('./express-notes/routes/html-routes');

// set the port 
const PORT = process.env.PORT || 3001;

// set up express app 
const app = express();

// Express middleware
// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true}));

// parse json
app.use(express.json());

// Serve static files
// Tells Express to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
// Mount the 'api_routes' middleware to handle API routes
app.use(api_routes);
// Mount the 'html_routes' middleware to handle HTML routes
app.use(html_routes);
// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });