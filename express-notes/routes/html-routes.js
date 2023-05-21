// Dependencies
const router = require('express').Router();
const path = require('path');


// Route for the home page
router.get('/', (req, res) => {
  // Log a message in the console indicating that a request for the index page was received
    console.info(`${req.method} request for index page received`);
    // Send the index.html file as a response
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// Route for the notes page
router.get('/notes.html', (req, res) => {
   // Log a message in the console indicating that a request for the notes page was received
    console.info(`${req.method} request for notes page received`);
    // Send the notes.html file as a response
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

// Export the router to be used in other modules
module.exports = router;