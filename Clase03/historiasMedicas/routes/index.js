var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var db = require('monk')("localhost/db_historias");


function fntAuthenticated(req, res, next){
	if(req.session.username){
		next();
	}else{
		res.redirect('/login');
	}
}

/* GET home page. */
router.get('/', fntAuthenticated, function(req, res, next) {
  	res.render('home', { title: 'Express', message:'Bienvenido, ', name: req.session.username});
});

router.get('/login', function(req, res, next){
	res.render('login');
});

router.post('/validate_user', function(req,res,next){
	var usuario = db.get('usuarios');
	usuario
		.find({email:req.body.inputEmail, password:req.body.inputPassword})
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

module.exports = router;
