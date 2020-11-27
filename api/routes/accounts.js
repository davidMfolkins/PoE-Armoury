
const CircularStructureStringify = require('circular-structure-stringify') 
const express = require("express");
const router = express.Router();
const fs = require('fs');
const axios = require("axios");

const fetch = require("node-fetch");

const {
  findCharacterDB,
  fetchCharacterAPI
} = require("./helpers/getters");

const { saveCharacter,
        saveAccount, 
} = require("./helpers/setters");

module.exports = (db) => {

  router.get('/:name', async (req, res, next) => {
    const accountName = req.params.name;
    fetch(`https://www.pathofexile.com/character-window/get-characters?accountName=${accountName}`)
    .then(result => {
      return result.json()
    }).then((data) => {
      // console.log(accountName)
      saveAccount(db, accountName)
      res.send(data)
    }).catch((err) => {
      res.status(404).send(err)
    })
  })

  router.get("/:account/characters/:character", async function (req,res,next) {
    console.log("Request for accounts and characters");

    const characterInDB = await findCharacterDB(db, req.params.character).then(
      (result) => {
        return result;
      }
    );

    if (characterInDB) {
      res.send(characterInDB);
    } else {

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
  }
  });
  
  

  return router;
}