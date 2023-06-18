const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const noteRoutes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.get('/notes', (req, res) => {
  // const notesData = require('../db/db.json');
  res.render(path.join(__dirname, '../public/notes.html'));
});

// app.use('/notes', noteRoutes);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);