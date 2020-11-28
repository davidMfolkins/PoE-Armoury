const axios = require("axios");

function fetchCharacter(accountName, characterName) {
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


function getCharacter(accountName, characterName) {

  const randomInterval = function () {
    return Math.floor((Math.random() * 500) + 100)
  }
  setState("loading");
  setTimeout(() => {
    fetchCharacter(accountName, characterName).then((res) => {
      if (res.name === "Error") {
        setCharacter(null);
      } else {
        setCharacter(res);
      }
      setState("character");
    });
  }, randomInterval())
};

export {
  getCharacter
}

