const router = require('express').Router();
const genId = require('../../lib/uniqueId.js')
const writeDbJson = require('../../lib/notes.js');

// Contents from the db.json file are served to the web page 
router.get('/notes', (req, res) => {
    let notesArr = require('../../db/db.json');
    res.json(notesArr);
});

// new data is accepted from the browser
router.post('/notes', (req, res) => {
    req.body.id = genId();
    let postNotesArr = require('../../db/db.json');
    postNotesArr.push(req.body);
    writeDbJson(postNotesArr)
    res.json('Your data was posted successfully');
}
);

// requests to delete data are received here
router.delete('/notes/:idNumber', (req, res) => {
    let notesArr = require('../../db/db.json');
    notesArr = notesArr.filter(note => req.params.idNumber !== note.id)
    writeDbJson(notesArr)
    res.json('The data was deleted from the database.');
});

module.exports = router; 