const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET characters by name
  router.get("/search/:name", async (req, res, next) => {
    const searchQuery = req.params.name.toUpperCase();
    let searchResults = [];
    await db
      .query(`SELECT name FROM characters WHERE upper(name) LIKE $1`, [
        `%${searchQuery}%`,
      ])
      .then((results) => {
        results.rows.forEach((entry) => {
          const newEntry = { name: entry.name, type: "character" };
          searchResults = [...searchResults, newEntry];
        });
      })
      .catch((err) => {
        console.log(err);
      });
    await db
      .query(`SELECT name FROM accounts WHERE upper(name) LIKE $1`, [
        `%${searchQuery}%`,
      ])
      .then((results) => {
        results.rows.forEach((entry) => {
          const newEntry = { name: entry.name, type: "account" };
          searchResults = [...searchResults, newEntry];
        });
      })
      .catch((err) => {
        console.log(err);
      });
    res.send(searchResults);
  });
  // returns all characters in DB
  router.get("/characters", (req, res, next) => {
    db.query("SELECT name FROM characters;").then((result) => {
      res.send(result.rows);
    });
  });

  return router;
};
