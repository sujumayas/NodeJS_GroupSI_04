var express = require('express');
var router = express.Router();

function fntAutenticado(req, res, next){
	if(req.session.usuario) {
		next()
	} else {
		res.redirect("/login")
	}
}

/* GET home page. */
router.get('/', fntAutenticado, function(req, res, next){
	res.render("home")
});

router.get("/login", function(req, res, next){
	res.render("login")
})

router.post("/usuario", function(req, res, next){
	if(req.body.usuario==="sergio" && req.body.contrasena==="1234") {
		req.session.usuario = {usuario: req.body.usuario}
		res.redirect("/")
	} else {
		res.render("login")
	}
})

module.exports = router;
