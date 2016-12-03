/*var express = require("express"),
	app = express()*/

function fnEscuchando(){
	console.log("Escuchando en el puerto 3000")
}

var express = require("express"),
	app = express(),
	path = require("path"),
	motorVistas = "ejs",
	dirVistas = "/vistas",
	dirPublico = "/publico"


app.set("view engine", motorVistas)
app.set("views", path.join(__dirname, dirVistas))

app.use(express.static(__dirname + dirPublico))

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










