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
//fields
	var sql = "SELECT * FROM customers";
	con.query(sql, function(err, result, fields) {
		if (err) throw err;
		console.log(fields[0].name);
		console.log("----------");
		var i;
		for (i=0; i<result.length; i++) {
		console.log(result[i].name);
		}
	});

});
