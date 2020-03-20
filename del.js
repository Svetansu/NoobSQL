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

//deleting data
	var sql = "DELETE FROM customers WHERE id = 6";
	con.query(sql, function(err, result, fields) {
		if (err) throw err; 
		console.log(result);
	});

});
