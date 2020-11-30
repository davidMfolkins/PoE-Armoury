const express = require("express");
const router = express.Router();
const axios = require("axios");
const fetch = require("node-fetch");

const { findCharacterDB, fetchCharacterAPI } = require("./helpers/getters");

const { saveCharacter, saveAccount } = require("./helpers/setters");

module.exports = (db) => {
  // GET all characters for a given account name
  // return structure:
  /* {data: 'a object containing characters', accountName: 'string of account name'}*/
  router.get("/:name", async (req, res, next) => {
    let accountName = req.params.name;
    fetch(
      `https://www.pathofexile.com/character-window/get-characters?accountName=${accountName}`
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if (!data.error) {
          axios
            .get(
              `https://www.pathofexile.com/character-window/get-account-name-by-character?character=${data[0].name}`
            )
            .then(async (result) => {
              await saveAccount(db, result.data.accountName);
              return result.data;
            })
            .then((result) => {
              res.send({ data, accountName: result.accountName });
            });
        } else {
          console.log("theres an error");
        }
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  });
  // GET a single character's information by name
  // either returns DB character or finds character via API, saves it in DB and returns it
  router.get("/:account/characters/:character", async function (
    req,
    res,
    next
  ) {
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
        await saveCharacter(db, characterFromAPI, req.params.account).then(
          () => {
            console.log("character saved in db");
            return "done";
          }
        );
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
};
