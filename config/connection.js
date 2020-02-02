// Set up MySQL connection.
var mysql = require("mysql2");
var connection;

var localConnection = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "Bqlbajaboy3!",
  database: "burgers_db"
}
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(localConnection);
};

var connection = mysql.createConnection(localConnection);
connection.connect();

module.exports = connection;