const router = require("express").Router();
const { append, json } = require("express/lib/response");
const { notes } = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const createNewNote = require("../../lib/note");

router.get("/notes", (req, res) => {
  let results = notes;
  console.log(results);
  res.json(results);
});

router.post("/notes", (req, res) => {
  console.log(req.body);
  const note = createNewNote(req.body, notes);
  res.json(req.body);
});

module.exports = router;
