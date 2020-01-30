var connection = require("./connection.js");

var orm = {
  // Selects all the burgers
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, table, function(err, results) {
      if (err) throw err;
      console.log(results);
    })
  },
  // Creates a burger with the burger_name and default value for devoured as FALSE
  insertOne: function(table, column, item) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, column, item], function(err, results) {
      if (err) throw err;
      console.log(results);
    })
  },
  // Will use this function to change my burgers from not devoured to devoured
  // Example updateOne("burgers", "devoured", TRUE, "id", id)
  updateOne: function(table, col1, val1, col2, val2) {
    // var queryString = "UPDATE table SET column1 = value1 WHERE column2 = value2"
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, col1, val1, col2, val2], function(err, results) {
      if (err) throw err;
      console.log(results);
    })
  }
};

module.exports = orm;
