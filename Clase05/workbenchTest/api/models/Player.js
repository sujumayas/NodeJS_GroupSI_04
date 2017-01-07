/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: "Players",
	connection: "testMysqlServer",
	attributes: {
		id : {
			primaryKey : true,
			type: "integer",
			autoIncrement: true,
			unique: true
		},
		name : {
			type:'string', //string interpretates as varchar 255 in mysql
			required: true
		},
		lastname : {
			type: 'string',
			required: true,
			defaultsTo:"Espinosa"
		},
		sex : {
			type: "string",
			enum:["male","woman","notsosimple"]
		}
	}
};


//Player.create({name:"Esen",lastname:"Espinosa",sex:"male"})