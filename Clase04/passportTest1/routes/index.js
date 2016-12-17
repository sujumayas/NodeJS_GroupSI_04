var express = require('express');
var router = express.Router();
var passport = require('passport');
// var flash = require('connect-flash');
var mongodb = require('mongodb');
var db = require('monk')("localhost/db_historias");

function beAuthentic(req, res, next){
	if(req.isAuthenticated()){
		next();
	}else{
		res.redirect('/');
	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.post('/login', 
	passport.authenticate(
		"local",
		{
			successRedirect: "/home",
			failureRedirect: "/",
			failureFlash: "Algo malo sucedió",
			successFlash: 'Welcome!'
		}
	)
);

router.get('/home', beAuthentic, function(req, res, next){
	res.render('home', {user : req.user, flash : req.flash});
});

router.get('/logout', function(req, res, next){
	req.logout();
	res.redirect('/');
});

module.exports = router;
