const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const noteRoutes = require('./routes/routes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use('/api', noteRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join('./public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);