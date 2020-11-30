const axios = require("axios");

function fetchCharacter(accountName, characterName) {
  return axios
    .get(
      `http://localhost:3030/accounts/${accountName}/characters/${characterName}`,
      { timeout: 4000 }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

export {
  fetchCharacter
}

