var Backbone = require("backbone");
var sql = require("../database");
var Reminder = require("./reminder")//in same folder

var ReminderList = Backbone.Collection.extend({
	model: Reminder,
	load: function(callback) {
		var self = this;
		//select all reminders from database
		var q = "SELECT * FROM reminders;"
		sql.connection.all(q, function(err, results) {
			//fill this list with Reminders based on that data
			self.reset(results);
			callback();
		});
	}
});

module.exports = ReminderList;