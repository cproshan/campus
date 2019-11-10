var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

});

router.get('/slogin', function(req, res, next) {
  res.render('slogin');
});

router.get('/tlogin', function(req, res, next) {
  res.render('tlogin');
});

module.exports = router;
