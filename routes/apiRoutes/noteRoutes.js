const router = require('express').Router();
const {notes} = require('../../db/db');
const {newNote, deleteNote} = require('../../lib/noteFunctions');

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = newNote(req.body, notes);
    res.json(note);
})
router.delete('/notes', (req, res) =>{

    let note = deleteNote(notes, req.params.id)
    res.json(note)
})

module.exports = router;