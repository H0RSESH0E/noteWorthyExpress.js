const fs = require('fs');
const path = require('path');
  
module.exports = function writeDbJson(notesArr) {
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArr), 'utf8', () => {});
    return notesArr;
};
