var credenciales = {
	facebook: {
		api_secret: "7584584874773630011",
		api_public: "jfjh478474774747",
		callback: "http://www.midominio.com/callbackFacebook"
	},
	google: {
		api_secret: "63737373746666",
		api_public: "abkc84848484",
		callback: "http://www.midominio.com/callbackGoogle",
		permisos: {}
	},
	twitter: {
		api_secret: "7584584874773630011",
		api_public: "jfjh478474774747",
		callback: "http://www.midominio.com/callbackTwitter"
	},
}

var refrescoTiempo = 36000

module.exports = {
	credenciales: credenciales,
	refrescoTiempo: refrescoTiempo
}




