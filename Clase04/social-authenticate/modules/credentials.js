var credentials = {
	facebook : {
		clientID: "1725834521067313",
        clientSecret:"5d37f058058597681fba258833907b20",
        callbackURL:"http://localhost:3000/redes/facebook/callback"
	},
	google :{
		clientID    :   '363598573978-0nomeoe3r3rbe4r53du1k42bledoqq6k.apps.googleusercontent.com',
        clientSecret:   '3PtYZicsMkLN5W-J_wFaIOmJ',
        callbackURL :   'http://localhost:3000/redes/google/callback',
	},
	twitter :{
		consumerKey: 'YbUesu1Z95Zs9i8E63rjs7Q5j',
		consumerSecret: 'nxUsBB510MNMVgcgU6bJhBpXbP0BSgH0DrMARKIN49yU7SPKua',
		callbackURL: 'http://127.0.0.1:3000/redes/twitter/callback'
	}

}

module.exports = credentials;