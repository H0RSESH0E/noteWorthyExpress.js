const router = require('express').Router();
const path = require('path');
const generatePassword = require('../../lib/uniqueId.js')
const { validateNote, createNewNote, writeDbJSON } = require('../../lib/notes.js');

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
    req.body.id = generatePassword();
    notesArr.push(req.body);
    console.log(notesArr);
    res.json(notesArr);
}
);


router.delete('/notes/:idNumber', (req, res) => {

    writeDbJSON(req.params.idNumber, notesArr)
});

module.exports = router; 