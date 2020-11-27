const axios = require("axios");

function getTodaysLadder(db, name) {
  console.log('finding todaysLadder...')
  return db.query(`SELECT * FROM ladders WHERE name=$1 ORDER BY last_requested DESC LIMIT 1;`, [name]).then((result) => {
    const last_requested = new Date(String(result.rows[0].last_requested))
    const today = new Date()
    if (today - last_requested < 86400000) {
      console.log('todays ladder found in DB')
      return result.rows[0]
    } else {
      console.log('DB does not have todays ladder. Refresh required.')
      return false
    }
  }).catch((err) => {
    return false
  })
 }

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

function fetchLadderCharacters(db, ladder) {
  console.log('fetching characters...')
  const characters = ladder.rankings.entries.reduce( (accumulator, entry) => {

    const character = findCharacterDB(db, entry.character.name).then((char) => {
      return char
    })

     return [...accumulator, character]

   }, [])

   return Promise.all(characters).then((results) => {
      const returnObj = results.filter(result => result !== null)
      console.log('found ' + returnObj.length + ' characters')
      return returnObj
  })
}

function fetchCharacterAPI(accountName, characterName) {
  return axios
    .get(
      `https://www.pathofexile.com/character-window/get-items?accountName=${accountName}&character=${characterName}`
    )
    .then((result) => {
      console.log('fetchCharacterApi results: ', result.data)
      return result.data
    })
    .catch((err) => {
      console.log(err.response.status, err.response.statusText, ': access to character blocked by DB.' )
      return null;
    });
}

function filterCharacters(entry) {
  if (entry === null){
  } else {
    if (entry.data.items.length > 0) {
      return true
    } else {
      return false
    }
  }
}

function findAccount(db, email) {
  return db.query('SELECT * FROM users WHERE email=$1', [email]).then((res) => {
    return res.rows
  }).catch((err) => {
    console.log(err)
  })
}

function getFavourites(db, user) {
  return db.query('SELECT favourites.*, characters.* FROM favourites JOIN characters ON characters.name = favourites.character_name WHERE favourites.user_id=$1', [user]).then((response) => {
    console.log('favorites found')
    return response.rows;
  }).catch((err) => {
    console.log('no favorites found')
    return null
  })
}

module.exports = {
  getItems,
  findCharacterDB,
  fetchCharacterAPI,
  findAccount,
  filterCharacters,
  getTodaysLadder,
  fetchLadderCharacters,
  getFavourites
};
