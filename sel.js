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
//select data
	var sql = "SELECT * FROM customers";
	con.query(sql, function(err, result) {
		if (err) throw err;
		var i;
		for (i=0; i<result.length; i++){
			console.log(result[i].name+" | "+result[i].email);
		}
	});

});
