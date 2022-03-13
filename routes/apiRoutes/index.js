const router = require('express').Router();
const genId = require('../../lib/uniqueId.js')
const writeDbJson = require('../../lib/notes.js');
const fs = require('fs');
const path = require('path');


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
    writeDbJson(postNotesArr);
    res.json(JSON.stringify(req.body));
}
);

// requests to delete data are received here
router.delete('/notes/:sillyName', (req, res) => {
    let notesArr = require('../../db/db.json');
    notesArr = notesArr.filter(note => req.params.sillyName !== note.id);
    // fs.writeFile(path.join(__dirname, '../../db/db.json'), notesArr, null, 2);

    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notesArr), 'utf8', () => {});
    return res.json(notesArr);
});

module.exports = router; 