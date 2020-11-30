const CircularStructureStringify = require("circular-structure-stringify");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const axios = require("axios");

  // GETTING LADDER JSONS FROM API
  // writes to new ladder_standard.json & ladder_hardcore.json
module.exports = (db) => {
  router.get("/standard", (req, res, next) => {
    axios
      .get("https://www.pathofexile.com/api/ladders/Heist?limit=200")
      .then((res) => {
        res.data.entries.forEach((entry) => {
          fs.appendFile(
            "../src/db/ladder_standard.json",
            `${CircularStructureStringify(entry)},`,
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        });
        setTimeout(() => {
          axios
            .get(
              "https://www.pathofexile.com/api/ladders/Heist?limit=200&offset=200"
            )
            .then((res) => {
              res.data.entries.forEach((entry) => {
                fs.appendFile(
                  "../src/db/ladder_standard.json",
                  `${CircularStructureStringify(entry)},`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
        }, [5000]);
        setTimeout(() => {
          axios
            .get(
              "https://www.pathofexile.com/api/ladders/Heist?limit=200&offset=400"
            )
            .then((res) => {
              res.data.entries.forEach((entry) => {
                fs.appendFile(
                  "../src/db/ladder_standard.json",
                  `${CircularStructureStringify(entry)},`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
        }, [10000]);
        setTimeout(() => {
          axios
            .get(
              "https://www.pathofexile.com/api/ladders/Heist?limit=200&offset=600"
            )
            .then((res) => {
              res.data.entries.forEach((entry) => {
                fs.appendFile(
                  "../db/ladder_standard.json",
                  `${CircularStructureStringify(entry)},`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
        }, [15000]);
        setTimeout(() => {
          axios
            .get(
              "https://www.pathofexile.com/api/ladders/Heist?limit=200&offset=800"
            )
            .then((res) => {
              res.data.entries.forEach((entry) => {
                fs.appendFile(
                  "../db/ladder_standard.json",
                  `${CircularStructureStringify(entry)},`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
        }, [20000]);
        setTimeout(() => {          
          fs.appendFile("../db/ladder_standard.json", "]", (err) => {
            if (err) {
              console.log(err);
            }
          });
        }, [23000]);
      });
  });

  router.get("/hardcore", (req, res, next) => {
    axios
      .get("https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200")
      .then((res) => {
        res.data.entries.forEach((entry) => {
          fs.appendFile(
            "../db/ladder_hardcore.json",
            `${CircularStructureStringify(entry)},`,
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        });
        setTimeout(() => {
          axios
            .get(
              "https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200&offset=200"
            )
            .then((res) => {
              res.data.entries.forEach((entry) => {
                fs.appendFile(
                  "../db/ladder_hardcore.json",
                  `${CircularStructureStringify(entry)},`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
        }, [5000]);
        setTimeout(() => {
          axios
            .get(
              "https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200&offset=400"
            )
            .then((res) => {
              res.data.entries.forEach((entry) => {
                fs.appendFile(
                  "../db/ladder_hardcore.json",
                  `${CircularStructureStringify(entry)},`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
        }, [10000]);
        setTimeout(() => {
          axios
            .get(
              "https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200&offset=600"
            )
            .then((res) => {
              res.data.entries.forEach((entry) => {
                fs.appendFile(
                  "../db/ladder_hardcore.json",
                  `${CircularStructureStringify(entry)},`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
        }, [15000]);
        setTimeout(() => {
          axios
            .get(
              "https://www.pathofexile.com/api/ladders/Hardcore%20Heist?limit=200&offset=800"
            )
            .then((res) => {
              res.data.entries.forEach((entry) => {
                fs.appendFile(
                  "../db/ladder_hardcore.json",
                  `${CircularStructureStringify(entry)},`,
                  (err) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
        }, [20000]);
        setTimeout(() => {
          fs.appendFile("../db/ladder_hardcore.json", "]", (err) => {
            if (err) {
              console.log(err);
            }
          });
        }, [23000]);
      });
  });
  return router;
};
