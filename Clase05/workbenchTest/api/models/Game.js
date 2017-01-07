/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: "Games",
	connection: "testMysqlServer",
	attributes: {
		id : {
			primaryKey : true,
			type: "integer",
			autoIncrement: true,
			unique: true
		},
		hash: {
			unique: true,
			type: "string", // This should be automaticly made hash string
			required: true
		},
		players: {
	    	collection: 'Player',
	      	via: 'games'
	    }	
	}
};

// Model Associations
// https://github.com/balderdashy/waterline-docs/blob/master/models/associations/one-to-many.md

//	> Create
//	
//	Game.create({hash:"AS2OFJAJBNJNQKNOEWWLZPSJG16"}).exec(console.log)
//	
//	> Update
//	
//	Game.update({id:1}, {players:[1,2]}).exec(console.log)
//
//	> Populate
//	
//	Game.find().populate("games").exec(console.log)
