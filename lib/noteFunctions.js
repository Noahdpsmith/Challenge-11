const fs = require("fs");
const path = require("path");
function newNote(all, notesArray){
    const note = all;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
    console.log(note)
    return note;
}

function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
    }
module.esports = {newNote, deleteNote};