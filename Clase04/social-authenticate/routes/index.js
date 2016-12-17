var express = require('express');
var router = express.Router();

function isAuthentic(req, res, next){
	if(req.isAuthenticated){
		next();
	}else{
		res.redirect('/');
	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/home', isAuthentic, function(req, res, next){
	res.render('home', req.user);
});

module.exports = router;
