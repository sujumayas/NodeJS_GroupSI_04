var passportFacebook = require('passport-facebook').Strategy;
var passportGoogle = require('passport-google-oauth2').Strategy;
var mongodb = require('mongodb');
var db = require('monk')("localhost/db_historias");
var credentials = require('./credentials');


function apiRedes(passport){
  //Facebook Authentication
  passport.use(
    new passportFacebook(
      {
        clientID: credentials.facebook.clientID,
        clientSecret:credentials.facebook.clientSecret,
        callbackURL:credentials.facebook.callbackURL,
        profileFields:["id","displayName","photos"]
      },
      function(accessToken, refreshToken, profile, done){
        console.log("Middleware is working...");
        console.log(profile);
        
        var Users = db.get("users");
        Users
          .find({idRedes: profile.id})
          .then(function(documents){
            if(documents.length==0){
              // Guardamos los datos que recibimos de FB
              var datos = {
                idRedes : profile.id,
                name : profile.displayName,
                photoUrl : profile.photos[0].value,
                proveedor : profile.provider
              }
              // Los insertamos en Users
              Users
                .insert(datos)
                .then(function(documents){
                  //Para que estén disponibles en req.user
                  return done(null, datos); 
                }).catch(function(err){
                  // Si hay problemas al INSERTAR en la BDD
                  return done(err);
                });
            }else{
              //Si encontramos en la base de datos al usuario, le enviamos el registro completo
              return done(null, documents[0]); 
            }
          }).catch(function(err){
            // Si hay problemas al hacer FIND en la BDD
            return done(err);
          });
      }
    )
  )
  passport.use(
    new passportGoogle(
      {
        clientID: credentials.google.clientID,
        clientSecret: credentials.google.clientSecret,
        callbackURL:credentials.google.callbackURL,
      },
      function(accessToken, refreshToken, profile, done){
        console.log("Middleware is working...");
        console.log(profile);
        
        var Users = db.get("users");
        Users
          .find({idRedes: profile.id})
          .then(function(documents){
            if(documents.length==0){
              // Guardamos los datos que recibimos de FB
              var datos = {
                idRedes : profile.id,
                name : profile.displayName,
                photoUrl : profile.photos[0].value,
                proveedor : profile.provider
              }
              // Los insertamos en Users
              Users
                .insert(datos)
                .then(function(documents){
                  //Para que estén disponibles en req.user
                  return done(null, datos); 
                }).catch(function(err){
                  // Si hay problemas al INSERTAR en la BDD
                  return done(err);
                });
            }else{
              //Si encontramos en la base de datos al usuario, le enviamos el registro completo
              return done(null, documents[0]); 
            }
          }).catch(function(err){
            // Si hay problemas al hacer FIND en la BDD
            return done(err);
          });
      }
    )
  )
  
}

module.exports = apiRedes; //paso la definición misma, no la ejecución de la funcion.
