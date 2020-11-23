const axios = require("axios");

export default function fetchCharacter(accountName, characterName) {
  return axios
    .get(
      `http://192.168.0.13:3030/accounts/${accountName}/characters/${characterName}`,
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
