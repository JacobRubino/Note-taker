require('express')

const PORT = 3001;
// const notes = require('../db/db.json');

const app = require('./routes');

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);