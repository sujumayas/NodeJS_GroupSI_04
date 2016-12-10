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
router.get('/', fntAuntenticado, function(req, res, next){
	res.render("home")
});

router.get("/login", function(req, res, next){
	res.render("login")
})

module.exports = router;
