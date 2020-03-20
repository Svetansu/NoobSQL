var mysql = require('mysql');

//console.log("Hello World."); 

//create a conection

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "noobdb",

});

//connect to MySQL
/*
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to DB yaayyyy!");
	con.query("CREATE DATABASE noobdb", function(err, result) {
		if (err) throw err;
		console.log("DB created yes");
	})
});
*/