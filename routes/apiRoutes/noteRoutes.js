const router = require("express").Router();
const { notes } = require("../../db/db.json");
console.log(notes);
router.get("/notes", (req, res) => {
  let results = notes;
  console.log(results);
  res.json(results);
});

module.exports = router;
