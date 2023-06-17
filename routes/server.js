const express = require('express');

const PORT = 3001;
const notes = require('../db/db.json');

const app = express();

app.use('/notes', notes);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

module.exports(app);