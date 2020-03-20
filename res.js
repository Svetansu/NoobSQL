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

	var sql = "INSERT INTO customers (name, email) VALUES ('Boom', 'Boom@boom')";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log(result.affectedRows);
	});

});
