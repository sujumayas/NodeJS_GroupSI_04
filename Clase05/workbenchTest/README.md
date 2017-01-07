# Clase05-workbenchTest

a [Sails](http://sailsjs.org) application


Ojo: La carpeta assets no es la que está sirviendose públicamente, sino .tmp

Crear un modelo: 

	$ sails generate model <name>

Migración de base de datos: 

Opciones: 

	a) [SAFE] 	No haces nada. >> Esta es la adecuada en PRODUCCIÓN.
	b) [ALTER] 	Modificar
	c) [DROP] 	Borrar

En MySQL puedes perder la data si usas las dos ultimas. En SQL pierdes no solo la data sino también Los permisos relacionados con esa data. En producción solo se debe usar la opción (a) porque al modificar o perder columnas pierdes toda la data y la pqtp. 

Esto se configura en config/models.js 




## Creamos un modelo 

	$ sails generate model Player

## Luego levantamos la consola

	$ sails console

## Luego vemos la data que hay dentro del modelo

	$ Player.find() --> Saca todo lo que está dentro del modelo (data privada incluso)

## Si queremos ver la data que tenemos para ese modelo : 

	$ Player.find().exec(console.log)

## Si queremos crear

	$ Player.create({name:"Esen", lastname:"Espinosa"}) -->> No sé por qué no funciona.
	$ Player.create({name:"Esen", lastname:"Espinosa"}).exec(console.log)

# TRABAJAR CON MYSQL

	1) Configurar MySQL y levantar un servidor de DBs y crear DB y Users
	2) Vamos a /config/connections.js  y leemos los comments. 
	3) Vamos a /config/models.js y cambiamos el "connection:" default. 









