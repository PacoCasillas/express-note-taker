// Import the 'fs' module for file system operations
const fs = require('fs');
// Import the 'path' module for working with file paths
const path = require('path');
// Import the 'uuid' module and assign the 'v4' property to the 'uuid' variable
const { v4: uuid } = require('uuid');
// Import the 'Router' class from the 'express' module for defining routes
const router = require('express').Router();
// Construct the file path for the 'db.json' file
const notesFilePath = path.join(__dirname, '../db/db.json');

// Read notes from the file
const readNotesFromFile = () => {
  // Check if the 'db.json' file exists
  if (fs.existsSync(notesFilePath)) {
    // Read the file data as a string
    const rawData = fs.readFileSync(notesFilePath, 'utf8');
    // Parse the JSON data into an array of objects
    return JSON.parse(rawData);
  } else {
    // If the file doesn't exist, return an empty array
    return [];
  }
};

// Write notes to the file
const writeNotesToFile = (notesData) => {
  // Write the notes data to the 'db.json' file
  fs.writeFileSync(notesFilePath, JSON.stringify(notesData));
};

// Route to handle saving a new note
router.post('/api/notes', (req, res) => {
  // Extract the title and text from the request body
  const { title, text } = req.body;
  // Create a new note object with a unique ID, title, and text
  const newNote = {
    id: uuid(),
    title,
    text,
  };
  // Read the existing notes from the file
  const notesData = readNotesFromFile();
  // Add the new note to the existing notes array
  notesData.push(newNote);
  // Write the updated notes array to the file
  writeNotesToFile(notesData);
  // Send the newly created note as a response
  res.json(newNote);
});

// Route to handle retrieving all notes
router.get('/api/notes', (req, res) => {
  // Read the existing notes from the file
  const notesData = readNotesFromFile();
  // Send the notes data as a JSON response
  res.json(notesData);
});

// Route to handle deleting a note
router.delete('/api/notes/:id', (req, res) => {
  // Extract the note ID from the request parameters
  const noteId = req.params.id;
  // Read the existing notes from the file
  let notesData = readNotesFromFile();
  // Filter out the note with the specified ID from the notes array
  notesData = notesData.filter((note) => note.id !== noteId);
  // Write the updated notes array to the file
  writeNotesToFile(notesData);
  // Send a success message as a JSON response
  res.status(200).json({ message: 'Note deleted successfully.' });
});

// Export the router to be used in other modules
module.exports = router;