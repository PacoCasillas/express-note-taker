const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');
const router = require('express').Router();

const notesFilePath = path.join(__dirname, '../db/db.json');

// Read notes from the file
const readNotesFromFile = () => {
  if (fs.existsSync(notesFilePath)) {
    const rawData = fs.readFileSync(notesFilePath, 'utf8');
    return JSON.parse(rawData);
  } else {
    return [];
  }
};

// Write notes to the file
const writeNotesToFile = (notesData) => {
  fs.writeFileSync(notesFilePath, JSON.stringify(notesData));
};

// Route to handle saving a new note
router.post('/api/notes', (req, res) => {
  const { title, text } = req.body;

  const newNote = {
    id: uuid(),
    title,
    text,
  };

  const notesData = readNotesFromFile();

  notesData.push(newNote);

  writeNotesToFile(notesData);

  res.json(newNote);
});

// Route to handle retrieving all notes
router.get('/api/notes', (req, res) => {
  const notesData = readNotesFromFile();
  res.json(notesData);
});

// Route to handle deleting a note
router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;

  let notesData = readNotesFromFile();

  notesData = notesData.filter((note) => note.id !== noteId);

  writeNotesToFile(notesData);

  res.status(200).json({ message: 'Note deleted successfully.' });
});

module.exports = router;