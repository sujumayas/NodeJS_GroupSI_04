var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var db = require('monk')("localhost/db_historias");

router.get("/", function(req,res,next){
	res.redirect("users/1");
});

/* GET users listing. */
router.get('/:page', function(req, res, next) {
  var users = db.get("users");
  var pageSize = 2;
  var page = req.params.page;
  users
  	.count()
  	.then(function(cantidadRegistros){
  		pageQuantity = Math.floor(cantidadRegistros / pageSize);
  		if(cantidadRegistros % pageSize > 0) pageQuantity++;
  		return users.find({},{limit:pageSize, skip:pageSize*(page-1)})
  	})
  	.then(function(data){
		res.render('usuarios', {title: "Users", data : data, pageQuantity: pageQuantity, page : page});	
  	})
  	.catch(function(error){
  		res.send("error uuu");
  	});
});


module.exports = router;
