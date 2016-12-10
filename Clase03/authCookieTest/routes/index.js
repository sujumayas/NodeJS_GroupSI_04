var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var db = require('monk')('localhost/bd_usuarios');

function fntAuthenticated(req, res, next){
	if(req.session.username){
		next();
	}else{
		res.redirect('/login');
	}
}

/* GET home page. */
router.get('/', fntAuthenticated, function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', function(req,res,next){
	res.render('login');
});

router.post('/validate_user', function(req,res,next){
	var usuario = db.get('usuarios');
	usuario
		.find({username:req.body.username, password:req.body.password})
		.then(function(registros){ //Ojo registros siempre es un array
			if(registros.length){
				req.session.username = {username:req.body.username}
				res.render('home', {username : req.body.username});
			}else{
				res.redirect('/login');
			}
		})
		.catch(function(error){
			res.send("Error ocurred in DB");
		})

	
	
});

router.get('/logout', function(req, res,next){
	req.session = null;
	res.render('login');
});

module.exports = router;
