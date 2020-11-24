async function saveCharacter(db, character, accountName) {
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
      return res.rows[0].id;
    });
  }

  const character_id = await db
    .query(
      `INSERT INTO characters(account_id, name, level, class, experience, last_requested) 
                  VALUES($1, $2, $3, $4, $5, CURRENT_TIMESTAMP) RETURNING *`,
      [
        account_id,
        character.character.name,
        character.character.level,
        character.character.class,
        character.character.experience,
      ]
    )
    .then((result) => {
      return result.rows[0].id;
    });
  return db
    .query(
      `INSERT INTO items(character_id, items) VALUES($1, $2) RETURNING *`,
      [character_id, character]
    )
    .then(() => {
      return "Data inserted successfully";
    });
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
  addUser
}
