var express = require("express"),
	app = express()


app.get("/", function(req, res){
	res.send("Estás en el home")
})

app.get("/facebook", function(req, res) {
	res.redirect("https://www.facebook.com")
})

app.get("/quienes", function(req, res){
	res.sendFile("quienes.html")
})

app.get("/nosotros", function(req, res){
	res.redirect("/quienes")
})

app.get("/descarga", function(req, res){
	res.download("archivo.pdf")
})


app.listen(process.env.port || 3000, function(){
	console.log("Ejecutando en el puerto " + (process.env.port || 3000))
})