const router = require('express').router;
const fs = require('fs');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get('/notes', (req, res) => {
//   const noteData = fs.readFile('../db/db.json', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
//   console.log(noteData);
//   res.sendFile()
// });
router.get('/', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.resnder(json(JSON.parse(data));
  });
});

// router.post('/notes', (req, res) => {
//   const noteData = fs.readFile('../db/db.json', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     if (req.body) {
//       const newNote = {
//           title,
//           text,
//           id: uuidv4(),
//       };
//     };
//   });
// });

// router.delete('/notes:id', (req, res) =>{
//   const deleteNote = req.params.id;
//   console.log(deleteNote)
//   fs.readFromFile('../db/db.json', (err, data) =>{
//     if (err) throw err;
//     console.log(data);
//     parseData = JSON.parse(data)
//     postDeleteNotes = JSON.stringify(parseData.filter((note)=> note.id !== deleteNote))
//     fs.writeFile('../db/db.json', postDeleteNotes)
//   });

// });

module.exports = router