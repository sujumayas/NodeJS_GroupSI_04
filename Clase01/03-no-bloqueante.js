var fs = require("fs")

fs.readFile("data.html", function(err, contenido){
	if(err) {
		console.log("Error: " + err)
	} else {
		console.log(contenido.toString())
	}
})