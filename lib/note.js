const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { resourceLimits } = require("worker_threads");

function createNewNote(body, notesArray) {
  const { title, text } = body;
  const newNote = {
    title,
    text,
    id: uuidv4(),
  };
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return newNote;
}

function deleteNoteById(id, notesArray) {
  //   const result = notesArray.filter((note) => note.id === id)[0];
  //   console.log(result);

  noteIndex = notesArray.findIndex((el) => {
    return el.id === String(id);
  });
  console.log(noteIndex);
  notesArray.splice(noteIndex, 1);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

module.exports = { createNewNote, deleteNoteById };
