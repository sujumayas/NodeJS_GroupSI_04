var express = require('express'), //Shortcut for requiring express
	app = express(),
	path = require('path'), 	//Require the path joining helper
	bodyParser = require("body-parser"),
	engine = "ejs",		//Define name for engine
	views = "/views",		//Define relative path for views
	publicFiles = "/public"		//Define the public (static) 
	

//Now set the view engine (templating engine)
app.set("view engine", engine)
//And then set the views path with the path helper and the __dirname global. 
app.set("views", path.join(__dirname, views))

//Use express static path
app.use(express.static(path.join(__dirname, publicFiles)))

//Use bodyparser
app.use(bodyParser.json())

//Body PArser has two libraries (qs | querystring)
//Hay que decirle false pa que use querystring que es mejor ¿?
app.use(bodyParser.urlencoded({extend: false})) 

//Define a helper method for the listening
function fnEscuchando() {
	console.log('Escuchando en el puerto 3000...')
}

//Expres has 4 methods
// GET 		-> Select
// POST		-> Insert
// PUT		-> Update
// DELETE	-> Delete

/**
 * Basic Index Route (get)
 * 
 * You can make simple routes like this using get. 
 * The "/" is the url you are going to parse
 * Then you call a callback with 2 params:
 * (Req = Request | Res = Response )
 * 
 * 
 * @param  {¿?} req 		[description]
 * @param  {¿?} res 		[description]
 * @return {Optional}		[description]
 */
app.get("/", function(req, res){
	res.send("<h1>Home</h1>")
})



/**
 * Basic Send File with express
 * 
 * You can send a file as a template or something like that
 * You just need to use the method "sendFile" (sendfile is deprecated)
 * The important thing here is __dirname
 * You need that global variable that helps you have the correct absolute route.
 * 
 */
app.get("/quienes", function(req,res){
	res.sendFile(__dirname + "/quienes.html")
})


/**
 * Basic External Redirect
 * 
 * You can make a simple redirect. Its very simple. 
 * 
 */
app.get("/fb", function(req, res){
	res.redirect("https://facebook.com")
})



/**
 * Basic Internal Redirect
 * 
 * The same as external redirect, but redirects internally. 
 * 
 */
app.get("/who", function(req, res){
	res.redirect("/quienes")
})


/**
 * Basic Download 
 * 
 * You can send a file to the user this way. 
 * 
 */
app.get("/download", function(req, res){
	res.download(__dirname + "/quienes.html")
})


/**
 * Basic Render 
 *
 * You need 3 things for this : 
 *     1. Declare the templateing engine (up)
 *     2. Declare the views path
 *     3. Declare other things i dont remember 
 * 
 * 
 * 
 * @param  {[type]} req                            [description]
 * @param  {[type]} res){	res.render("listado")} [description]
 * @return {[type]}                                [description]
 */
app.get("/listado", function(req,res){
	var datos = {
		nombre : "Esen",
		apellido : "Espinosa"
	}
	res.render("listado", datos)
})


/**
 * Render with some extra data (to try a foreach)
 * 
 * 
 * 
 */
app.get("/usuarios", function(req, res){
	var registros = [
		{nombre: "nombre1", apellido: "apellido1"},
		{nombre: "nombre2", apellido: "apellido2"},
		{nombre: "nombre3", apellido: "apellido3"},
		{nombre: "nombre4", apellido: "apellido4"},
		{nombre: "nombre5", apellido: "apellido5"},
		{nombre: "nombre6", apellido: "apellido6"},
		{nombre: "nombre7", apellido: "apellido7"},
		{nombre: "nombre8", apellido: "apellido8"}
	]
	res.render("usuarios", {registros:registros})
})

/**
 * Conditional Renders using Params 
 * 
 * You can use :attribute to use that attribute
 * value as a param to parse the DB. 
 * 
 */
app.get("/jugadores/:equipo/:activo", function(req, res){
	var jugadores = [
		{nombre: "jugador1", activo: 0},
		{nombre: "jugador2", activo: 1},
		{nombre: "jugador3", activo: 0},
		{nombre: "jugador4", activo: 0},
		{nombre: "jugador5", activo: 0},
		{nombre: "jugador6", activo: 1},
		{nombre: "jugador7", activo: 0},
		{nombre: "jugador8", activo: 0}
	]
	var toReturn = []
	jugadores.forEach(function(item){
		if(item.activo == req.params.activo){
			toReturn.push(item)
		}
	})
	datos = {
		jugadores: toReturn,
		equipo : req.params.equipo  // You could even send params directly. (like a search)
	}
	res.render("jugadores", datos)
})


// app.get("/search/:queryString", function(req,res){
// 	var foundNothing = true
	
// 	if(!foundNothing){

// 	}else{
// 		toReturn = req.params.queryString
// 	}
// 	res.render("search", {toReturn:toReturn})
// });

app.get("/registro", function(req,res){
	res.render("registro")
})


app.post("/insertar", function(req,res){
	var datos = {
		name: req.body.name,
		email: req.body.email
	}
	res.json(datos)
})






//Finally, listen to the port 3000
app.listen(3000, fnEscuchando)