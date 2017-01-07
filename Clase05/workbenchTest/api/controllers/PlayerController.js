/**
 * PlayerController
 *
 * @description :: Server-side logic for managing Players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllPlayers : function(req,res,next){
		
		Player
			.find({})
			.then(function(data){
				res.json(data);
			})
			.catch(function(err){
				res.serverError(err);
			})
	},

	createPlayer: function(req,res,next){
		
		// var registro = req.allParams(); 		//Short method
		var newPlayer = {
			name: req.body.name,
			lastname: req.body.lastname,
			sex: req.body.sex,
		}
		
		Player
			.create(newPlayer)
			.then(function(data){
				res.json(data);
			})
			.catch(function(err){
				res.serverError(err);
			})

	},

	getPlayerDetail: function(req,res,next){
		
		var filter = {id : req.params.id};
		
		Player
			// .find(filter) //Short method
			.find()
			.where(filtro)
			.then(function(data){
				res.json(data);
			})
			.catch(function(err){
				res.serverError(err);
			})
	},
	updatePlayer:function(req,res,next){
		
		var data = req.allParams();
		
		var filter = {id : data.id};

		Player
			.update(filter, data)
			.then(function(data){
				res.json(data);
			})
			.catch(function(err){
				res.serverError(err);
			})

	},
	deletePlayer:function(req,res,next){
		
		var filter = {id : req.params.id};
		
		Player
			.destroy(filter)
			.then(function(data){
				res.json(data);
			})
			.catch(function(err){
				res.serverError(err);
			})
	},
	getAllPlayersPaginated:function(req,res,next){
		var pagination = {
			page: req.params.page,
			limit: req.params.limit
		}
		Player
			.find()
			.paginate(pagination)
			.then(function(data){
				res.json(data);
			})
			.catch(function(err){
				res.serverError(err);
			})
	},
	countPlayers:function(req,res,next){
		var data = req.allParams();
		
		Player
			.count()
			.where(data)
			.then(function(data){
				res.json(data);
			})
			.catch(function(err){
				res.serverError(err);
			})
	},

};
