const router = require('express').Router();
const path = require('path');
const { validateNote, createNewNote, writeAfterDelete } = require('../../lib/notes.js');

const { notesArr } = require('../../db/db.json');
console.log(notesArr);
console.log(notesArr.length);
router.get('/notes', (req, res) => {
    // let results = notesArr;
    // if (req.query) {
    //   results = filterByQuery(req.query, results);
    // }
    res.json(notesArr);
  });
    
  router.post('/notes', (req, res) => {
    console.log("Here! ", req.body)
    req.body.id = notesArr.length.toString();
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not in the correct format.');
    } else {
      const note = createNewNote(req.body, notesArr);
      res.json(note);
    }
  });

  router.delete('/notes/:idNumber', (req, res) => {
    console.log(req.params.idNumber);
    console.log("Deleting... ", req.params.idNumber)
    writeAfterDelete(req.params.idNumber, notesArr)
    .then(() => {
        return res.json(req.params.idNumber)
    });
    
});
  
  module.exports = router; 