var http = require("http").createServer(),
	fs = require("fs"),
	path = require("path"),
	rutas = [
		{ruta: "", archivo: "index.html"},
		{ruta: "quienes", archivo: "quienes.html"},
		{ruta: "servicios", archivo: "servicios.html"}
	]

function fnServidor(req, res){
	var rutaRequerida = path.basename(req.url)

	console.log(rutaRequerida)

	fs.readFile("data.html", function(err, contenido) {
		if(err) {
			res.writeHead(500, {"content-type": "text/plain"})
			res.end("Ocurrió un error.")
		} else {
			res.writeHead(200, {"content-type": "text/html"})
			res.end(contenido.toString())			
		}
	})
}

function fnEscuchando(){
	console.log("Servidor escuchando en el puerto " + (process.env.port || 3000))
}

http
	.on("request", fnServidor)
	.listen(process.env.port || 3000, fnEscuchando)