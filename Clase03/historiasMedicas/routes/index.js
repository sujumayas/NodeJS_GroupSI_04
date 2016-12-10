var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var db = require('monk')("localhost/db_historias");

/* GET home page. */
router.get('/', function(req, res, next) {
	var dbUser = db.require('users');
	var sessionUser = req.session.user;

  	res.render('home', { title: 'Express', message:'Bienvenido, ', name:name });
});


module.exports = router;
