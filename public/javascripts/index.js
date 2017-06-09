var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route("/cinema").get(function(req,res) {
	res.render("cinema");
})

router.route("/reserve").get(function(req,res) {
	res.render("reserve");
})

module.exports = router;
