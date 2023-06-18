const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "..", "db", "db.json");

router.get("/notes", (req, res) => {
//get the notes from db
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    //parse the notes, return them where they can be rendered on the page
    const notes = JSON.parse(data);
    res.status(200).json(notes);
  });
});

router.post("/notes", (req, res) => {
  //get the notes from db
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    //parse the notes
    const notes = JSON.parse(data);
    //make sure the note exists, if it does push the new note thats getting posted onto the parsed list
    if (req.body) {
      const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Date.now().toString(),
      };
      notes.push(newNote);
      // rewrite the db with the new note inside
      fs.writeFile(filePath, JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Server error");
        }
        // 201 because new item created
        res.status(201).json(newNote);
      });
    }
  });
});

router.delete("/notes/:id", (req, res) => {
  // take the id of the note that we are requesting to delete
  const deleteNote = req.params.id;
  // get the notes from the db
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    //parse the info in the db
    const parseData = JSON.parse(data);
    // map the notes as parseData, if any items in the note match the note id, set to null to delete
    const postDeletedNotes = parseData.map((note) => {
      if (note.id === deleteNote) {
        //return null to delete the entry
        return null; 
      }
      return note;
      })
    // remove the null entries
    .filter((note) => note !== null); 
    //rewrite the db
    fs.writeFile(filePath, JSON.stringify(postDeletedNotes), (err) => {
      if (err) throw err;
      
      res.status(200).send("Note deleted"); // Send a success response
    });
  });
});

module.exports = router;
