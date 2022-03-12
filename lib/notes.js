const fs = require('fs');
const path = require('path');
  
function writeDbJson(notesArr) {
    console.log('kop', notesArr);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArr), null, 2);
    return notesArr;
}

module.exports = writeDbJson;