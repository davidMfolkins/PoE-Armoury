const axios = require("axios");

export default function fetchCharacter(accountName, characterName) {
  return axios
    .get(
      `http://localhost:3030/accounts/${accountName}/characters/${characterName}`,
      { timeout: 4000 }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
