var express = require("express");
var router = express.Router();

const axios = require("axios");

const {
  findCharacterDB,
  getItems,
  fetchCharacterAPI,
} = require("./helpers/getters");

const saveCharacter = require("./helpers/setters");
const { route } = require("../app");

/* GET home page. */

module.exports = (db) => {
  router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });
  router.get("/items", function (req, res, next) {
    console.log("received");
    db.query(`SELECT * FROM characters;`)
      .then((data) => {
        // console.log(data.rows)
        res.send(data.rows);
      })
      .catch((err) => {
        // console.log(err)
        res.status(500).json({ error: err.message });
      });
    router.get("/characters", function (req, res, next) {
      // console.log('received')
    });
  });

  router.get("/ladder", function (req, res, next) {
    db.query(`SELECT rankings FROM ladders;`)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/accounts/:account/characters/:character", async function (req,res,next) {
    console.log("Request for accounts and characters");

    const characterInDB = await findCharacterDB(db, req.params.character).then(
      (result) => {
        return result;
      }
    );

    if (characterInDB) {
      res.send(characterInDB);
    }

    const characterFromAPI = await fetchCharacterAPI(
      req.params.account,
      req.params.character
    ).then((result) => {
      return result;
    });

    if (characterFromAPI && !characterInDB) {
      console.log(characterFromAPI);
      await saveCharacter(db, characterFromAPI, req.params.account).then(() => {
        console.log("character saved in db");
        return "done";
      });

      findCharacterDB(db, req.params.character)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.send(null);
    }
  });
  router.get('/search/:name', async (req, res, next) => {
    const searchQuery = req.params.name.toUpperCase()
    const searchResults = {'searchItems': []};
    await db.query(`SELECT name FROM characters WHERE upper(name) LIKE $1`, [`%${searchQuery}%`]).then((results) => {
      console.log(results.rows[0])
      const newEntry = {'name': results.rows[0].name, 'type': 'character'}
      searchResults.searchItems = [...searchResults.searchItems, newEntry]
    }).catch((err) => {
      console.log(err)
    })
    await db.query(`SELECT name FROM accounts WHERE upper(name) LIKE $1`, [`%${searchQuery}%`]).then((results) => {
      const newEntry = {'name': results.rows[0].name, 'type': 'account'}
      searchResults.searchItems = [...searchResults.searchItems, newEntry]
    }).catch((err) => {
      console.log(err)
    })
    res.send(searchResults)
  })
  return router;
};
