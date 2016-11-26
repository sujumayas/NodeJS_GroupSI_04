var http = require("http").createServer()

function fnServidor(req, res){
	// res.writeHead(200, {"content-type": "text/plain"})
	// res.write("Todo está bien.")
	res.writeHead(200, {"content-type": "text/html"})
	res.write("<h1>Texto de cabecera en html</h1>")
	res.end()
}

function fnEscuchando(){
	console.log("Servidor escuchando en el puerto " + (process.env.port || 3000))
}

http
	.on("request", fnServidor)
	.listen(process.env.port || 3000, fnEscuchando)

/*http.on("request", function(req, res){
	res.writeHead(200, {"content-type": "text/plain"})
	res.write("Todo está bien.")
	res.end()
})

http.listen(3000, function(){
	console.log("Servidor escuchando en el puerto 3000")
})*/