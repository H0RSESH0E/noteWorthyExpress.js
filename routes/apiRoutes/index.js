const router = require('express').Router();
const path = require('path');
const { validateNote, createNewNote, writeAfterDelete } = require('../../lib/notes.js');
let notesArr = require('../../db/db.json');

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
    req.body.id = notesArr.length
    notesArr.push(req.body);
    console.log(notesArr);
    res.json(notesArr);
}
);

router.delete('/notes/:idNumber', (req, res) => {
    console.log("delete ROute");
    notesArr.splice(req.params.idNumber, 1);
    console.log(notesArr);
    res.json(notesArr);
    
})


//   router.delete('/notes/:idNumber', (req, res) => {

//     writeAfterDelete(req.params.idNumber, notesArr)
//     .then(() => {
//         return res.json(req.params.idNumber)
//     });

// });

module.exports = router; 