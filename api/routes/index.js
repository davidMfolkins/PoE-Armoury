const CircularStructureStringify = require('circular-structure-stringify') 


var express = require("express");
var router = express.Router();

const axios = require("axios");

const fetch = require("node-fetch");
const fs = require('fs');

const {
  findCharacterDB,
  getItems,
  filterCharacters,
  getTodaysLadder,
  fetchLadderCharacters,
  fetchCharacterAPI
} = require("./helpers/getters");

const { saveCharacter,
        saveCharacters,
        saveAccount, 
        saveLadder,
} = require("./helpers/setters");
const { route } = require("../app");

/* GET home page. */

module.exports = (db) => {

  router.get('/standard', (req, res, next) => {
    axios.get('https://www.pathofexile.com/api/ladders/Heist?limit=200').then((res) => {
      res.data.entries.forEach((entry) => {
        fs.appendFile('../db/ladder_standard.json', `${CircularStructureStringify(entry)},`, (err) => {

          if(err) {
            console.log(err)
          }
        })
      })
      setTimeout(() => {
        axios.get('https://www.pathofexile.com/api/ladders/Heist?limit=200&offset=200').then((res) => {
          res.data.entries.forEach((entry) => {
            
            fs.appendFile('../db/ladder_standard.json', `${CircularStructureStringify(entry)},`, (err) => {
            
              if(err) {
                console.log(err)
              }
            })
            
          })
        })
      }, [5000])
      setTimeout(() => {
        axios.get('https://www.pathofexile.com/api/ladders/Heist?limit=200&offset=400').then((res) => {
          res.data.entries.forEach((entry) => {
            
            fs.appendFile('../db/ladder_standard.json', `${CircularStructureStringify(entry)},`, (err) => {
            
              if(err) {
                console.log(err)
              }
            })
            
          })
        })
      }, [10000])
      setTimeout(() => {
        axios.get('https://www.pathofexile.com/api/ladders/Heist?limit=200&offset=600').then((res) => {
          res.data.entries.forEach((entry) => {
            
            fs.appendFile('../db/ladder_standard.json', `${CircularStructureStringify(entry)},`, (err) => {
            
              if(err) {
                console.log(err)
              }
            })
            
          })
        })
      }, [15000])
      setTimeout(() => {
        axios.get('https://www.pathofexile.com/api/ladders/Heist?limit=200&offset=800').then((res) => {
          res.data.entries.forEach((entry) => {
            
            fs.appendFile('../db/ladder_standard.json', `${CircularStructureStringify(entry)},`, (err) => {
            
              if(err) {
                console.log(err)
              }
            })
            
          })
        })
      }, [20000])
      setTimeout(() => {
       
            
            fs.appendFile('../db/ladder_standard.json', ']', (err) => {
            
              if(err) {
                console.log(err)
              }
            })
            
         
      }, [23000])
      
  })
});


   
 
router.get('/hardcore', (req, res, next) => {
  axios.get('https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200').then((res) => {
    res.data.entries.forEach((entry) => {
      fs.appendFile('../db/ladder_hardcore.json', `${CircularStructureStringify(entry)},`, (err) => {

        if(err) {
          console.log(err)
        }
      })
    })
    setTimeout(() => {
      axios.get('https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200&offset=200').then((res) => {
        res.data.entries.forEach((entry) => {
          
          fs.appendFile('../db/ladder_hardcore.json', `${CircularStructureStringify(entry)},`, (err) => {
          
            if(err) {
              console.log(err)
            }
          })
          
        })
      })
    }, [5000])
    setTimeout(() => {
      axios.get('https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200&offset=400').then((res) => {
        res.data.entries.forEach((entry) => {
          
          fs.appendFile('../db/ladder_hardcore.json', `${CircularStructureStringify(entry)},`, (err) => {
          
            if(err) {
              console.log(err)
            }
          })
          
        })
      })
    }, [10000])
    setTimeout(() => {
      axios.get('https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200&offset=600').then((res) => {
        res.data.entries.forEach((entry) => {
          
          fs.appendFile('../db/ladder_hardcore.json', `${CircularStructureStringify(entry)},`, (err) => {
          
            if(err) {
              console.log(err)
            }
          })
          
        })
      })
    }, [15000])
    setTimeout(() => {
      axios.get('https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200&offset=800').then((res) => {
        res.data.entries.forEach((entry) => {
          
          fs.appendFile('../db/ladder_hardcore.json', `${CircularStructureStringify(entry)},`, (err) => {
          
            if(err) {
              console.log(err)
            }
          })
          
        })
      })
    }, [20000])
    setTimeout(() => {
     
          
          fs.appendFile('../db/ladder_hardcore.json', ']', (err) => {
          
            if(err) {
              console.log(err)
            }
          })
          
       
    }, [23000])
    
})
});




























  router.get("/items", function (req, res, next) {
    console.log("received");
    db.query(`SELECT * FROM characters;`)
    .then((data) => {
      // console.log(data.rows)
      res.send(data.rows);
    })
    .catch((err) => {
      // console.log(err)
      res.status(500).json({ error: err.message });
    });
    router.get("/characters", function (req, res, next) {
      // console.log('received')
    });
  });
  
  router.get("/ladder/:name",  async function (req, res, next) {

    let ladderName;
    if (req.params.name === 'standard') {
      ladderName = 'Heist'
    } else if (req.params.name === 'hardcore') {
      ladderName = 'Hardcore%20Heist'
    }

    let todaysLadder = await getTodaysLadder(db, req.params.name);

    if (!todaysLadder) {
      console.log('fetching fresh ladder...')

    axios.get(`https://www.pathofexile.com/api/ladders/${ladderName}?limit=5&type=league`)
    .then( async (result) => {
      const ladder_id = await saveLadder(db, req.params.name, CircularStructureStringify(result.data))

      return await saveCharacters(db, result.data.entries, ladder_id)

    }).then( async (result) => {

      todaysLadder = await getTodaysLadder(db, req.params.name)

      const characters = await fetchLadderCharacters(db, todaysLadder)
      res.send(CircularStructureStringify(characters))
    })
    .catch((err) =>{
      console.log(err)
      res.status(403).send('something wrong with ur URL')
    })
    
  } else {
    const characters = await fetchLadderCharacters(db, todaysLadder)
    res.send(CircularStructureStringify(characters))
  }
  });
  
  router.get('/accounts/:name', async (req, res, next) => {
    const accountName = req.params.name;
    fetch(`https://www.pathofexile.com/character-window/get-characters?accountName=${accountName}`)
    .then(result => {
      return result.json()
    }).then((data) => {
      // console.log(accountName)
      saveAccount(db, accountName)
      res.send(data)
    })
  })

  router.get("/accounts/:account/characters/:character", async function (req,res,next) {
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
      console.log(characterFromAPI);
      await saveCharacter(db, characterFromAPI, req.params.account).then(() => {
        console.log("character saved in db");
        return "done";
      });

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
  router.get('/search/:name', async (req, res, next) => {
    const searchQuery = req.params.name.toUpperCase()
    const searchResults = {'searchItems': []};
    await db.query(`SELECT name FROM characters WHERE upper(name) LIKE $1`, [`%${searchQuery}%`]).then((results) => {
      console.log(results.rows[0])
      const newEntry = {'name': results.rows[0].name, 'type': 'character'}
      searchResults.searchItems = [...searchResults.searchItems, newEntry]
    }).catch((err) => {
      console.log(err)
    })
    await db.query(`SELECT name FROM accounts WHERE upper(name) LIKE $1`, [`%${searchQuery}%`]).then((results) => {
      const newEntry = {'name': results.rows[0].name, 'type': 'account'}
      searchResults.searchItems = [...searchResults.searchItems, newEntry]
    }).catch((err) => {
      console.log(err)
    })
    res.send(searchResults)
  })
  return router;
};
