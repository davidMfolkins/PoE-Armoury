const bcrypt = require('bcrypt')
const { addUser } = require('./helpers/setters')

/* GET home page. */

module.exports = (db, router) => {
  router.get('/test', (req, res, next) => {
    res.send('Hi there')
  })
  router.post('/register', (req, res, next) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12)
    console.log('adding user...')
    addUser(db, user)
    .then((user) => {
      console.log('user added...')
      if (!user) {
        res.send({error: "error"});
        return;
      }
      console.log(user[0].id)
      console.log(req.session)
      req.session.userId = user[0].id;
      console.log(req.session)
      res.redirect('http://localhost:3030/')
  }).catch((err) => {
    console.log(err)
  })
});
  return router;
};
