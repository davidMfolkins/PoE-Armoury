const axios = require("axios");

// all items for a single character
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
// queries DB for character, returns an object containing character info & items
function findCharacterDB(db, name) {
  return db
    .query(
      `SELECT items.*, accounts.name AS accountname, accounts.twitch AS twitch, characters.* FROM ITEMS JOIN CHARACTERS ON items.character_id = characters.id JOIN accounts ON accounts.id = characters.account_id WHERE characters.name = $1
  `,
      [name]
    )
    .then((dbCharacter) => {
      if (dbCharacter.rows.length > 0) {
        return dbCharacter.rows[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      return null;
    });
}
// queries PoE API for character and returns items
function fetchCharacterAPI(accountName, characterName) {
  return axios
    .get(
      `https://www.pathofexile.com/character-window/get-items?accountName=${accountName}&character=${characterName}`
    )
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(
        err.response.status,
        err.response.statusText,
        ": access to character blocked by DB."
      );
      return null;
    });
}

function filterCharacters(entry) {
  if (entry === null) {
  } else {
    if (entry.data.items.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

function findAccount(db, email) {
  return db
    .query("SELECT * FROM users WHERE email=$1", [email])
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getFavourites(db, user) {
  return db
    .query(
      "SELECT favourites.*, characters.* FROM favourites JOIN characters ON characters.name = favourites.character_name WHERE favourites.user_id=$1",
      [user]
    )
    .then((response) => {
      console.log("favorites found");
      return response.rows;
    })
    .catch((err) => {
      console.log("no favorites found");
      return null;
    });
}

module.exports = {
  getItems,
  findCharacterDB,
  fetchCharacterAPI,
  findAccount,
  filterCharacters,
  getFavourites,
};
