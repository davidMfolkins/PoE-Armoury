const CircularStructureStringify = require('circular-structure-stringify') 


var express = require("express");
var router = express.Router();

const axios = require("axios");

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
    let searchResults = [];
    await db.query(`SELECT name FROM characters WHERE upper(name) LIKE $1`, [`%${searchQuery}%`]).then((results) => {
      results.rows.forEach((entry) => {
        const newEntry = {'name': entry.name, 'type': 'character'}
        searchResults = [...searchResults, newEntry]
      })
    }).catch((err) => {
      console.log(err)
    })
    await db.query(`SELECT name FROM accounts WHERE upper(name) LIKE $1`, [`%${searchQuery}%`]).then((results) => {
      results.rows.forEach((entry) => {
        const newEntry = {'name': entry.name, 'type': 'account'}
        searchResults = [...searchResults, newEntry]
      })
     
     
    }).catch((err) => {
      console.log(err)
    })
    console.log(searchResults)
    res.send(searchResults)
  })

  router.get('/characters', (req, res, next) => {
    db.query('SELECT name FROM characters;').then((result) => {
      res.send(result.rows)
    })
  })

  return router;
};
