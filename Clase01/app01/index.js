var express = require("express"),
	app = express(),
	motorVistas = 'ejs',
	directorioVistas = __dirname + "/vistas"

app.set("view engine", motorVistas)
app.set("views", directorioVistas)


app.get("/", function(req, res){
	res.send("Estás en el home")
})

app.get("/facebook", function(req, res) {
	res.redirect("https://www.facebook.com")
})

app.get("/quienes", function(req, res){
	res.sendFile(__dirname + "/quienes.html")
})

app.get("/nosotros", function(req, res){
	res.redirect("/quienes")
})

app.get("/descarga", function(req, res){
	res.download("archivo.pdf")
})

app.get("/datos", function(req, res) {
	var misDatos = {
		nombre: "Sergio",
		apellido: "Hidalgo",
		curso: "NodeJS"
	}
	res.render("datos-personales", misDatos)
})

app.get("/bd", function(req, res){
	var datos = {
		registros: [
			{curso: "NodeJS", frecuencia: "Sábados"},
			{curso: "HTML", frecuencia: "Martes y Jueves"},
			{curso: "Proyectos Corporativos", frecuencia: "Lunes y Viernes"}
		]
	}

	res.render("cursos", datos)
})


app.listen(process.env.port || 3000, function(){
	console.log("Ejecutando en el puerto " + (process.env.port || 3000))
})