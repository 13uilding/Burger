// Set up MySQL connection.
var mysql = require("mysql");
var connection;

var localConnection = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bqlbajaboy3!",
  database: "burgers_db"
}
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(localConnection);
};

var connection = mysql.createConnection(localConnection);
connection.connect(function(err) {
  if (err) {
    console.log("Error connecting " + err.stack);
  }
  console.log("Connected with id " + connection.threadId);
})

module.exports = connection;