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

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to DB yaayyyy!");
//	con.query("CREATE DATABASE noobdb", function(err, result) {
//		if (err) throw err;
//		console.log("DB created yes");
//	})

	//Create a table
	var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("table created yes");
	});
});
