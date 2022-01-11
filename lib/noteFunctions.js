const fs = require('fs');
const path = require('path');
function newNote(all, notesArray){
    const note = all;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
    return note;
}
module.esports = {newNote}