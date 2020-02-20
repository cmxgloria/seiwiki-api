const db = require("../db/db");

function all() {
  return db.query("select * from bookmarks;");
}

function create(params) {
  return db.query("insert into bookmarks set url = $1;", [params.url]);
}

function findById(id) {
  return db.query("select * from bookmarks where id = $1;", [id]);
}

module.exports = {
  all: all,
  create: create,
  findById: findById
};
