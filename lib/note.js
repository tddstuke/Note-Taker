const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

function createNewNote(body, notesArray) {
  const { title, text } = body;
  const newNote = {
    title,
    text,
    note_id: uuidv4(),
  };
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return newNote;
}

module.exports = createNewNote;
