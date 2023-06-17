const note = require('express').Router();
const { Router } = require('express');
const fs = require('fs');

Router.get('/notes', (req, res) => {
  const noteData = fs.readFile('../db/db.json', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  console.log(noteData);
});


Router.post('/notes', (req, res) => {
  const noteData = fs.readFile('../db/db.json', (err, data) => {
    if (err) throw err;
    console.log(data);
    if (req.body) {
      const newNote = {
          title,
          text,
          id: uuidv4(),
      };

    };
  });
});

Router.delete('/notes')