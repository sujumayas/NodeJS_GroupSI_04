var eventos = require("events"),
	eventoEmitter = eventos.EventEmitter,
	obj = new eventoEmitter()

obj.on("mensaje desde el cliente", function(msg) {
	console.log("Enviado desde el cliente: " + msg)
})

obj.on("mensaje desde el cliente", function(par) {
	console.log("Generación de reporte")
})

obj.once("mensaje desde el cliente", function(par) {
	console.log("=====================")
})



obj.emit("mensaje desde el cliente", "Mensaje de prueba")
obj.emit("mensaje desde el cliente", "Sergio")
obj.removeAllListeners()
obj.emit("mensaje desde el cliente", "Hidalgo")





