var express = require('express');
var router = express.Router();
var passport = require('passport');


//1 Ruta que llama a FB
router.get('/facebook/login', passport.authenticate("facebook"));

//2 Ruta que responde
router.get('/facebook/callback',
	passport.authenticate(
		'facebook', 
		{
			successRedirect:"/home",
			failureRedirect:"/"

		}
	)
)

//Rutas Google
//Ojo Google pide permisos extra para toda la información que vayamos a pedir
router.get(
	'/google/login',
	passport.authenticate("google", 
		{
		scope:[
			'https://www.googleapis.com/auth/plus.login',
			'https://www.googleapis.com/auth/plus.profile.emails.read'
			]	
		}
	) 
);

router.get('/google/callback',
	passport.authenticate(
		'google', 
		{
			successRedirect:"/home",
			failureRedirect:"/"

		}
	)
)

//RUTAS DE TWITTER
router.get('/twitter/login', passport.authenticate("twitter"));

router.get('/twitter/callback',
	passport.authenticate(
		'twitter', 
		{
			successRedirect:"/home",
			failureRedirect:"/"

		}
	)
)

//RUTAS DE TWITTER
router.get('/github/login', passport.authenticate("github"));

router.get('/github/callback',
	passport.authenticate(
		'github', 
		{
			successRedirect:"/home",
			failureRedirect:"/"

		}
	)
)


router.get('/logout', function(req,res){
	req.logout();
	res.redirect('/');
});

module.exports = router;