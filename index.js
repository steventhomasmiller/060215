/*
Here's the code that starts the server

/views - templates go here
/handlers - controllers
/models - backbone
/routes.js - contains all routing
/database.js - starts and configs SQLlite
*/

var hapi = require("hapi");
var server = new hapi.Server();

server.connection({port: 8000});
server.views({
	engines: {
		html: require("handlebars") //whenever ends in html, it will use handlebars
	},
	path: "./views",
	isCached: false
});

var Reminder = require("./models/reminder"); //capitalize; importing constructor

var sql = require("./database"); //sql is facade
sql.init(function() {
	console.log("The database is ready."); //server will not start until table exists
	var reminder = new Reminder({
		task: "Start server"
	});
	reminder.create(function(err) {
		if(err) {
			console.error(err);
		}
		sql.connection.all("SELECT * FROM reminders", function(err, results) {
			console.log(err, results)
		});
	});
	server.start(); //server won't start until database is ready.
}); //anything that happens after the database is ready.

var routes = require("./routes")
server.route(routes);