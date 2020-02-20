const pg = require("pg");

const pool = new pg.Pool({ database: "seiwiki" }); // connect to the database

module.exports = {
  query: (sql, params) => {
    return pool.query(sql, params);
  }
};
