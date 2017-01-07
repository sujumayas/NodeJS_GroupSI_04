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
		}
	}
};


//Game.create({hash:"391jg9183jg91jg131g3gj1g-13g"}).exec(console.log)