var http = require("http").createServer(),
	fs = require("fs"),
	path = require("path"),
	rutas = [
		{ruta: "", archivo: "index.html"},
		{ruta: "quienes", archivo: "quienes.html"},
		{ruta: "servicios", archivo: "servicios.html"}
	],
	noEncontrado = true

function fnEnviarArchivo(archivo, res) {
	fs.readFile(archivo, function(err, contenido) {
		if(err) {
			res.writeHead(500, {"content-type": "text/plain"})
			res.end("Ocurrió un error.")
		} else {
			res.writeHead(200, {"content-type": "text/html"})
			res.end(contenido.toString())			
		}
	})
}

function fnServidor(req, res){
	var rutaRequerida = path.basename(req.url)

	rutas.forEach(function(elem, ind){
		if(rutaRequerida==elem.ruta) {
			noEncontrado = false
			fnEnviarArchivo(elem.archivo, res)
		}
	})

	if(noEncontrado) {
		res.writeHead(404, {"content-type": "text/html"})
		res.end("NO ENCONTRADO")			
	}
}

function fnEscuchando(){
	console.log("Servidor escuchando en el puerto " + (process.env.port || 3000))
}

http
	.on("request", fnServidor)
	.listen(process.env.port || 3000, fnEscuchando)