const bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(10);
const { addUser } = require('./helpers/setters')

/* GET home page. */

module.exports = (db, router) => {
  router.get('/test', (req, res, next) => {
    res.send('Hi there')
  })
  router.post('/register', (req, res, next) => {
    const user = req.body;
    user.password = bcrypt.hashSync("B4c0/\/", salt);
    console.log('adding user...')
    addUser(db, user)
    .then((user) => {
      console.log('user added...')
      if (!user) {
        res.send({error: "error"});
        return;
      }
      res.send(String(user[0].id))
  }).catch((err) => {
    console.log(err)
  })
});

router.post('/login', (req, res) => {
  const {email, password} = req.body;
  db.query('SELECT * FROM users WHERE email=$1', [email])
    .then(result => {
      if (!result) {
        res.send({error: "error"});
        return;
      }
      if (bcrypt.compareSync(password, result.rows[0].password)) {
        console.log('passwords match')
        res.status(200).send(String(result.rows[0].id))
      } else {
        console.log('passwords dont match')
        res.status(403).send('nope')
      }
    })
    .catch(e => res.send(e));
});
  return router;
};
