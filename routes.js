module.exports = [

	{
		method: "GET",
		path: "/",
		handler: require("./handlers/home") //imports from individual and gives us access
	}

];