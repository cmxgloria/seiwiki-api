const express = require("express");
// Ruby pg is a module that allows Ruby programs to interact with the PostgreSQL database engine

// bodyParser only module come with express
const bodyParser = require("body-parser");
// make new object , Pool is a function or class
// Pool connect to the database
const bookmarksController = require("./controllers/bookmarksController");
// const categoriesController = require("./controllers/categoriesController");
// const userController = require("./controllers/userController");
const morgan = require("morgan");
const app = express();
const port = 8080;
// middleware which will parse JSON request into objects
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bookmarksController);
// app.use(categoriesController);
// app.use(userController);
//read
app.get("/", (req, res) => {
  res.json({ welcome: "seiwiki api" });
});

// app.get("/bookmarks", (req, res) => {
//   pool
//     .query("SELECT * FROM bookmarks;")
//     .then(results => res.json({ data: results.rows }));
// });

// create
// app.post("/bookmarks", (req, res) => {
//   // req.query-data was send via querystring
//   // req.params - data was send via pretty URLSearchParams
//   // req.body- data send via FormData or urlencoded
//   // data send via json - wont work with sinatra
//   // SELECT->RETURNING * NEW RECORD->SHOW ON JSON,
//   pool
//     .query(
//       "INSERT INTO bookmarks(url, description) VALUES ($1, $2) RETURNING *;",
//       [req.body.url, req.body.description]
//     )
//     // async so put then to finish first
//     .then(results => {
//       res.json({ results: results.rows });
//     });
// });

app.listen(port, () => {
  console.log(`seiwiki api listening on ${port}`);
});
