var express = require('express');
var router = express.Router();

function fntAuthenticated(req, res, next){
	if(req.session.user){
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

router.get('/usuario', function(req,res,next){
	if (req.body.username =="xinef" && req.body.password=="987987"){ //Aquí se comprobará con BD.
		req.session.usuario = {usuario:req.body.usuario}
		res.redirect('/');
	}else{
		res.render('login');
	}
});

router.get('/logout', function(req, res,next){
	req.session = null;
	res.render('login');
});

module.exports = router;
