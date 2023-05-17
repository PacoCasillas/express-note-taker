// Dependency
const express = require('express');

// 
const api_routes = require('./Develop/routes/api-routes')
const html_routes = require('./Develop/routes/html-routes')

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

app.use(api_routes);
app.use(html_routes);


