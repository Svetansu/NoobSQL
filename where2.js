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
//Using Where Clause with AND/OR
	var name_srch = 'S%';
	var id_srch = 4;
	var sql = "SELECT name FROM customers WHERE name LIKE ? AND id < ?";
	con.query(sql, [name_srch, id_srch],function(err, result, fields) {
		if (err) throw err; 
		console.log(result);
	});

});
