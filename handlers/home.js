//home.js

var ReminderList = require("../models/reminderList");

module.exports = function(req, reply){
		var list = new ReminderList();
		list.load(function() {
			var data = list.toJSON();
			console.log(data);
		//list is now ready
		reply.view("home", { //appears on home page
			test: "It's alive, yo.", //wherever "test" is will be replaced by this object
			reminders: data //view now has access to reminders tag 
		});
	});
};

	//npm nodemon -g
	//nodemon index.js