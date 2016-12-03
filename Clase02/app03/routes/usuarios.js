var express = require("express"),
	router = express.Router(),
	mongodb = require("mongodb"),
	db = require("monk")("localhost/bdusuarios"),
	Usuarios = db.get("usuarios")

router.get("/", function(req, res, next){
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

router.post("/", function(req, res, next){
	var registro = {
		nombre: req.body.nombre,
		apellido: req.body.apellido
	}

	Usuarios
		.insert(registro)
		.then(function(registro){
			res.redirect("/usuarios")
		})
		.catch(function(error){
			res.status(500)
			res.send(error)
		})
})

router.get("/:id", function(req, res, next){
	Usuarios
		.find({_id: req.params.id})
		.then(function(registros){
			res.render("edicion", {registro: registros[0]})
		})
		.catch(function(error){
			res.status(500)
			res.send(error)
		})
})

router.put("/:id", function(req, res, next){
	Usuarios
		.update({_id: req.params.id}, {nombre:req.body.nombre, apellido: req.body.apellido})
		.then(function(registros){
			res.redirect("/usuarios")
		})
		.catch(function(error){
			res.status(500)
			res.send(error)
		})
})


module.exports = router


