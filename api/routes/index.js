const CircularStructureStringify = require('circular-structure-stringify') 


var express = require("express");
var router = express.Router();

const axios = require("axios");

const fetch = require("node-fetch");


const {
  findCharacterDB,
  getItems,
  filterCharacters,
  getTodaysLadder,
  fetchLadderCharacters,
  fetchCharacterAPI
} = require("./helpers/getters");

const { saveCharacter,
        saveCharacters,
        saveAccount, 
        saveLadder,
} = require("./helpers/setters");

/* GET home page. */

module.exports = (db) => {
  
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

  router.get('/characters', (req, res, next) => {
    db.query('SELECT name FROM characters;').then((result) => {
      res.send(result.rows)
    })
  })

  return router;
};
