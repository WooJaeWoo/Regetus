var mysql = require("mysql");

// TODO: set connection pool or not?

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "dnwodn"
});

module.exports = connection;
