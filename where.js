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
//Using Where Clause
	var sql = "SELECT name FROM customers WHERE name LIKE 'S%'";
	con.query(sql, function(err, result, fields) {
		if (err) throw err; 
		console.log(result);
	});

});
