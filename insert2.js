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
	
	//Create a database
//	con.query("CREATE DATABASE noobdb", function(err, result) {
//		if (err) throw err;
//		console.log("DB created yes");
//	})

	//Create a table
//	var sql = "CREATE TABLE customers (name VARCHAR(255), email VARCHAR(255))";
//	con.query(sql, function(err, result) {
//		if (err) throw err;
//		console.log("table created yes");
//	});

	//Alter table
//	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//	con.query(sql, function (err, result) {
//		if (err) throw err;
//		console.log("table altered finally.");
//	});

	//Insert many into table
	var sql = "INSERT INTO customers (name, email) VALUES ?";
	var values = [
		['Poor Internet', 'poor@internet.com'],
		['Anshuman Saboo', 'i_own@gmail.com'],
		['Sanika Aphale', 'toobusy@gmail.com'],
	]
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Records in: "+result.affectedRows);
	});

});
