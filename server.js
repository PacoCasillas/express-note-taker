// Dependencies
const express = require('express');

// 
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

// tells html to start in the public folder
app.use(express.static('public'));

app.use('/api', api_routes); // Mount the api_routes router under the /api path
app.use(html_routes);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`));