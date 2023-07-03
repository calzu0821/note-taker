const express = require('express'); // module to create the router
const fs = require('fs'); // module to read and write files
const { v4: uuidv4 } = require('uuid'); // function from the uuid module to generate unique IDs
const path = require('path'); //module to handle file paths

const router = express.Router(); // create a new router object and assign it to the 'router' variable

router.get('/api/notes', (req, res) => {
  const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  const notes = JSON.parse(notesData);
  res.json(notes);
});

router.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = {
    id: uuidv4(),
    title,
    text,
  };

  const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  const notes = JSON.parse(notesData);

  notes.push(newNote);

  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));

  res.json(newNote);
});

router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;

  const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  let notes = JSON.parse(notesData);

  notes = notes.filter((note) => note.id !== noteId);

  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));

  res.json({ message: 'Note deleted successfully' });
});

module.exports = router;