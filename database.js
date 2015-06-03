//database.js

var sqlite = require("sqlite3");

var facade = {
	connection: null,
	init: function(callback) {
		var db = new sqlite.Database("reminders.db"); //creating db
		facade.connection = db; // once connection is made, they can use this
		db.run("CREATE TABLE IF NOT EXISTS reminders (task, complete)", function() {
			callback(); //function passed in index.js; runs when ready, transfers control
		});
		
	}
};

module.exports = facade; //what we're exporting, but not funcitonally anything. Just a grab bag.