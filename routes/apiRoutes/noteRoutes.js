const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { createNewNote, deleteNoteById } = require("../../lib/note");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  console.log("Note has been posted");
  const note = createNewNote(req.body, notes);
  res.json(req.body);
});

router.delete("/notes/:id", (req, res) => {
  console.log("Note has been deleted");
  const id = req.params.id;
  deleteNoteById(id, notes);
  res.json(req.body);
});

module.exports = router;
