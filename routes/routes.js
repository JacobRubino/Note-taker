const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path')

router.get('/notes', (req, res) => {
  const filePath = path.join(__dirname, '..', 'db', 'db.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }

    const notes = JSON.parse(data);
    res.status(200).json(notes);
  });
});

// router.post('/notes', (req, res) => {
//   //get the object
//   const noteData = fs.readFile('../db/db.json', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     notes= JSON.parse(data)

//     if (req.body) {
//       const newNote = {
//           title: req.body.title,
//           text: req.body.text,
//           id: Date.now().toString(),
//       };
//       notes.push(newNote)
//       fs.writeFile('../db/db.json', JSON.stringify(noteData), (err) => {
//         if (err) {
//           console.error(err);
//         }
//       });
//     };
//   });
// });

// router.delete('/notes:id', (req, res) =>{
//   const deleteNote = req.params.id;
//   console.log(deleteNote)
//   fs.readFile('../db/db.json', (err, data) =>{
//     if (err) throw err;
//     console.log(data);
//     parseData = JSON.parse(data)
//     postDeleteNotes = JSON.stringify(parseData.filter((note)=> note.id !== deleteNote))
//     fs.writeFile('../db/db.json', postDeleteNotes)
//   });

// });
module.exports = router;