var express = require("express"),
	router = express.Router(),
	mongodb = require("mongodb"),
	db = require("monk")("localhost/bdusuarios")

router.get("/", function(req, res, next){
	var Usuarios = db.get("usuarios")

	Usuarios
		.find()
		.then(function(registros){
			res.render("lista-usuarios", {registros: registros})
		})
		.catch(function(error){
			res.status(500)
			res.send(error)
		})
})


module.exports = router


