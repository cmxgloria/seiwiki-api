const express = require("express");
const router = express.Router();
// const db = require('../db/db')
const Bookmark = require("../models/bookmark");

// read
router.get("/bookmarks", (req, res) => {
  // make a request to an api
  // Giphy.search().then()

  Bookmark.all().then(results => {
    res.json({ data: results.rows });
  });
});

// create
router.post("/bookmarks", (req, res) => {
  // req.query - data was send via querystring
  // req.params - data was send via pretty urls
  // req.body - data send via form data or urlencoded
  // req.body - data send via json - won't work with sinatra by default
  // db.query(
  //   "INSERT INTO bookmarks (url, description) VALUES ($1, $2) RETURNING *;",
  //   [req.body.url, req.body.description]
  // )

  Bookmark.create(req.body).then(results => {
    res.json({ results: results.rows });
  });
});

module.exports = router;
