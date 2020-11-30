const bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(10);
const { addUser } = require("./helpers/setters");
const { findAccount, getFavourites } = require("./helpers/getters");

module.exports = (db, router) => {
  // checks if email already exists, else registers new account
  router.post("/register", async (req, res, next) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, salt);
    const alreadyExists = await findAccount(db, user.email).then((users) => {
      return users;
    });

    if (alreadyExists.length > 0) {
      res.status(403).send("noppeeee");
    } else {
      addUser(db, user)
        .then((user) => {
          console.log("user added...");
          if (!user) {
            res.send({ error: "error" });
            return;
          }
          res.send(String(user[0].id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email=$1", [email])
      .then((result) => {
        console.log(result);
        if (result.rows.length === 0) {
          res.status(403).send({ error: "error" });
        } else {
          if (bcrypt.compareSync(password, result.rows[0].password)) {
            console.log("passwords match");
            res.status(200).send(String(result.rows[0].id));
          } else {
            console.log("passwords dont match");
            res.status(403).send("nope");
          }
        }
      })
      .catch((e) => res.send(e));
  });
  // returns an array of a users favourite characters
  router.get("/:id/favourites", async (req, res, next) => {
    const userFavourites = await getFavourites(db, req.params.id);
    res.send(userFavourites);
  });

  router.delete(`/:user_id/favourites/:name`, (req, res, next) => {
    db.query(
      "DELETE FROM favourites WHERE user_id=$1 AND character_name=$2 RETURNING *",
      [req.params.user_id, req.params.name]
    )
      .then(async (result) => {
        const userFavourites = await getFavourites(db, req.params.user_id);
        res.send(userFavourites);
      })
      .catch((err) => console.log(err));
  });

  router.post(`/:user_id/favourites/:name`, async (req, res, next) => {
    const alreadyExists = await db
      .query(
        "SELECT * FROM favourites WHERE user_id=$1 AND character_name=$2",
        [req.params.user_id, req.params.name]
      )
      .then((result) => {
        console.log("already favorited");
        return result.rows;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    if (alreadyExists.length === 0) {
      db.query(
        "INSERT INTO favourites(user_id, character_name) VALUES($1, $2) RETURNING *",
        [req.params.user_id, req.params.name]
      )
        .then(async (result) => {
          const userFavourites = await getFavourites(db, req.params.user_id);
          res.send(userFavourites);
        })
        .catch((err) => console.log(err));
    } else {
      res.status(403).send("already favorited");
    }
  });
  return router;
};
