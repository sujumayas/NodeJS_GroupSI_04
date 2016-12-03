/*var express = require("express"),
	app = express()*/

function fnEscuchando(){
	console.log("Escuchando en el puerto 3000")
}

var express = require("express"),
	app = express(),
	path = require("path"),
	bodyParser = require("body-parser"),
	motorVistas = "ejs",
	dirVistas = "/vistas",
	dirPublico = "/publico"


app.set("view engine", motorVistas)
app.set("views", path.join(__dirname, dirVistas))

app.use(express.static(__dirname + dirPublico))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: false}))

app.listen(3000, fnEscuchando)

app.get("/", function(req, res){
	res.send("<h1>Home</h1>")
})

app.get("/quienes", function(req, res) {
	res.sendFile(__dirname+"/quienes.html")
})

app.get("/facebook", function(req, res){
	res.redirect("http://facebook.com")
})

app.get("/nosotros", function(req, res){
	res.redirect("/quienes")
})

app.get("/descargar", function(req, res){
	res.download(__dirname + "/quienes.html")
})

app.get("/listado", function(req, res){
	var datos = {
		nombre: "Sergio",
		apellido: "Hidalgo"
	}
	res.render("listado", datos)
})

app.get("/usuarios", function(req, res) {

	var registros = [
		{nombre: "Nombre1", apellido: "Apellido1"},
		{nombre: "Nombre2", apellido: "Apellido2"},
		{nombre: "Nombre3", apellido: "Apellido3"},
		{nombre: "Nombre4", apellido: "Apellido4"},
		{nombre: "Nombre5", apellido: "Apellido5"}
	]

	res.render("usuarios", {
		registros: registros
	})
})

app.get("/jugadores/:activo/:equipo", function(req, res){
	var jugadores = [
		{jugador: "Jugador1", activo: 1},
		{jugador: "Jugador2", activo: 0},
		{jugador: "Jugador3", activo: 0},
		{jugador: "Jugador4", activo: 1},
		{jugador: "Jugador5", activo: 0}
	]

	var jugadoresFiltrados = []
	jugadores.forEach(function(item){
		if(item.activo==req.params.activo) {
			jugadoresFiltrados.push(item)
		}
	})

	var datos = {
		jugadores: jugadoresFiltrados,
		equipo: req.params.equipo
	}

	res.render("jugadores", datos)
})

app.get("/registro", function(req, res){
	res.render("registro")
})

app.post("/insertar", function(req, res){
	var datos = {
		nombre: req.body.nombre,
		correo: req.body.correo
	}

	res.json(datos)
})





















