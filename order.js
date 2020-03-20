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

//Ordering data
	var sql = "SELECT * FROM customers ORDER BY name DESC";
	con.query(sql, function(err, result, fields) {
		if (err) throw err; 
		console.log(result);
	});

});
