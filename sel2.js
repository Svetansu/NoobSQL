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
//select specific data
	var sql = "SELECT name, id FROM customers";
	con.query(sql, function(err, result, fields) {
		if (err) throw err;
		console.log(result);
	});

});
