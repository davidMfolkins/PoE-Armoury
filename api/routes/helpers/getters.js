const axios = require("axios");

function getItems(accountName, characterName) {
  return axios
    .get(
      `https://www.pathofexile.com/character-window/get-items?accountName=${accountName}&character=${characterName}`
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

function findCharacterDB(db, name) {
  return db
    .query(
      `SELECT * FROM ITEMS JOIN CHARACTERS ON items.character_id = characters.id WHERE characters.name = $1
  `,
      [name]
    )
    .then((dbCharacter) => {
      if (dbCharacter.rows.length > 0) {
        console.log("wow");
        return dbCharacter.rows[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      return null;
    });
}

function fetchCharacterAPI(accountName, characterName) {
  return axios
    .get(
      `https://www.pathofexile.com/character-window/get-items?accountName=${accountName}&character=${characterName}`
    )
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return null;
    });
}

module.exports = {
  getItems,
  findCharacterDB,
  fetchCharacterAPI,
};
