const fs = require('fs');
const path = require('path');

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    return true;
  }
  
function createNewNote(body, notesArr) {
    notesArr.push(body);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notesArr }, null, 2)
    );
    return body;
  }

function writeDbJSON(id, notesArr) {
    notesArr = notesArr.filter((notes) => notes.id !== id);
    console.log('kop', notesArr);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notesArr }, null, 2)
    )
    return notesArr;
    }



module.exports = { createNewNote, validateNote, writeDbJSON }