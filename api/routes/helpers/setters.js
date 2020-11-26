const { fetchCharacterAPI, filterCharacters } = require('./getters')


async function saveCharacter(db, character, account, ladder_id) {
  console.log('checking for account...')
  const account_exists = await db.query(`SELECT id, name FROM accounts WHERE name=$1;`, [account]).then((result) => {
    console.log('account exists')
    return result.rows
  }).catch((err) => {
    console.log('account does not exist')
    console.log(err)
    return null
  })
  let account_id;

  if (account_exists.length > 0) {
    account_id = account_exists[0].id
  } else {
    console.log('creating new account...')
    let twitch;
    if (account.twitch) {
      twitch = account.twitch.name
    } else {
      twitch = null
    }
    account_id = await db.query(`INSERT INTO accounts(name, twitch) VALUES($1, $2) RETURNING *;`, [account, twitch])
    .then((res) => {
      console.log('created account')
      return res.rows[0].id;
    }).catch((err) => {
      console.log('error making account:', err)
      return err
    })
  }
  console.log('saving character...')
  const character_id = await db
    .query(
      `INSERT INTO characters(account_id, ladder_id, name, level, class, experience, last_requested) 
                  VALUES($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP) RETURNING *`,
      [
        account_id,
        ladder_id,
        character.character.name,
        character.character.level,
        character.character.class,
        character.character.experience,
      ]
    )
    .then((result) => {
      console.log('character saved.')
      return result.rows[0].id;
    }).catch((err) => {
      console.log('error saving character: ', err)
      return err
    })
    console.log('saving items...')
  return db
    .query(
      `INSERT INTO items(character_id, items) VALUES($1, $2) RETURNING *`,
      [character_id, character]
    )
    .then(() => {
      console.log('items saved')
      return "Data inserted successfully";
    }).catch((err) => {
      console.log('error saving items: ', err)
      return err
    })
}

function saveCharacters(db, characters, ladder_id) {
  console.log('filtering and saving characters...')
  const savedCharacters = characters.reduce( (accumulator, entry) => {
    

    const character = fetchCharacterAPI(entry.account.name, entry.character.name)
     .then(results => {
       if (filterCharacters(results)) {
         console.log('character is valid. saving...')
         saveCharacter(db, results.data, entry.account, ladder_id)
         return results
       } else {
         console.log('character has no items. Did not save.')
         return false
       }
     })

     return [...accumulator, character]

   }, [])

   return Promise.all(savedCharacters).then((result) => {
     console.log(savedCharacters.length + ' valid characters were saved')
    return result
  })
}


async function saveAccount(db, accountName) {
  const account_exists = await db.query(`SELECT id, name FROM accounts WHERE name=$1;`, [accountName]).then((result) => {
    return result.rows
  }).catch((err) => {
    console.log(err)
  })
  let account_id;

  if (account_exists.length > 0) {
    account_id = account_exists[0].id
  } else {
    account_id = await db.query(`INSERT INTO accounts(name) VALUES($1) RETURNING *;`, [accountName])
    .then((res) => {
      console.log(`account added`)
      return res.rows[0].id;
    }).catch(err => {
      console.log(err)
    })
  }
}


async function saveLadder(db, name, ladder) {
    return new Promise (function (resolve, reject) {
      db.query(`INSERT INTO ladders(name, last_requested, rankings) VALUES($1, CURRENT_TIMESTAMP, $2) RETURNING *;`, [name, ladder])
    .then((res) => {
      console.log('ladder id:' + res.rows[0].id + ' successfully saved')
      resolve(res.rows[0].id)
    }).catch(err => {
      console.log('error saving ladder')
      reject(false)
    })
  })
}

function addUser (db, user) {
  console.log('adding..')
  const dataArray = [user.name, user.email, user.password];
  return db.query(`
  INSERT INTO users (name, email, password)
  VALUES($1, $2, $3)
  RETURNING *;
`, dataArray).then((res) => {
    return res.rows
  }).catch((err) => {
    console.log(err)
  })

}

module.exports = {
  saveCharacter,
  saveCharacters,
  addUser,
  saveAccount,
  saveLadder,
}

