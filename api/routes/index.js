var express = require('express');
var router = express.Router();

/* GET home page. */


module.exports = (db) => {
  router.get('/', function(req, res, next) {
    console.log('aaaa')
    res.render('index', { title: 'Express' });
  });
  router.get('/items', function(req, res, next) {
    console.log('received')
    db.query(`SELECT * FROM characters;`).then(data => {
      console.log(data.rows)
      res.send(data.rows)
    }).catch(err => {
      console.log(err)
      res.status(500).json({ error: err.message });
    });
    router.get('/characters', function(req, res, next) {
      console.log('received')
  });
});
  return router;
};


