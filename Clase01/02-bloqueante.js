var fs = require("fs")

var contenido = fs.readFileSync("data.html")

console.log(contenido.toString())