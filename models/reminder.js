//lets us talk to the database; not itself the database.
//device by which we talk about this data

var Backbone = require("backbone");
var sql = require("../database"); //.. is for the parent directory

//extend function create models

var Reminder = Backbone.Model.extend({
	//custom model -- how it's different
	//make properties same as columns in database
	defaults: {
		task: "",
		complete: false //by default, task isn't complete
	},
	create: function(callback) {
		callback = callback || function() {};
		//get its own data
		var data = this.toJSON(); //objects created from this function
		//run an INSERT on the database
		var q = "INSERT INTO reminders (task, complete) VALUES ($task, $complete);"; //mustache tags, but for sql
		//pass in its data
		sql.connection.run(q, {
			$task: data.task,
			$complete: data.complete
		}, callback);
		//when done, call the callback
	}
});

//capital letter = put "new"...

// var reminder = new Reminder(); 

// console.log(reminder.toJSON());


module.exports = Reminder; //any module can require this function 