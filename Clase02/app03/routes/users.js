var express = require('express');
var router = express.Router();

// DB setting up (requires)
var mongodb = require('mongodb');
var monk = require('monk');

// Set the db from monk searching for mongo database of name "userdb"
var db = monk('localhost:27017/userdb');

//Put your collection in a variable
var userCollection = db.get("users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  userCollection
	.find() 
	.then(function(registros){ //Promise to deliver when the data is found
		res.render("users", {registros:registros});
	})
	.catch(function(err){ //Catch possible errors ! 
		res.status(500)
		res.send(err);
	});
  
});

router.post('/', function(req,res,next){
	var registro = {
		name: req.body.name,
		lastname: req.body.lastname,
		email: req.body.email
	}
	userCollection
	.insert(registro)
	.then(function(registro){
		res.redirect("/users")
	})
	.catch(function(err){
		res.status(500)
		res.send(error)
	})
})


router.get('/edit/:id', function(req, res, next){
	userCollection
	.find({_id:req.params.id})
	.then(function(registro){
		res.render("edit", {registro:registros[0]})
	})
	.catch(function(err){
		res.status(500)
		res.send(error)
	})
})


router.put('/:id', function(req,res,next){
	userCollection
	.update({_id:req.params.id}, {name:req.body.name, lastname:req.body.lastname,email:req.body.email})
	.then(function(registros){
		res.redirect("/users")
	})
	.catch(function(err){
		res.status(500)
		res.send(error)
	})
})

router.get('/delete/:id', function(req,res,next){
	userCollection
	.remove({_id: req.params.id})
	.then(function(registros){
		res.redirect("/users")
	})
	.catch(function(err){
		res.status(500)
		res.send(error)
	})
})


module.exports = router;
