const router = require('express').Router();
const path = require('path');

const path = require('../public')

// logs a message in the console saying that a request was made. Sets the route to send index.html as a response
router.get('/', (req, res) => {
    console.info(`${req.method} request for index page received`)
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// logs a message in the console saying that a request was made. Sets the route to send notes.html as a response
router.get('/notes', (req, res) => {
    console.info(`${req.method} request for notes page received`)
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;