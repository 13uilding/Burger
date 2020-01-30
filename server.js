const express = require("express");
const orm = require("./config/orm");


var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Use Handlebars to render the main index.html page with the plans in it.
app.get("/", function(req, res) {
    connection.query("SELECT * FROM movies;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { movies: data });
    });
  });
  
  // Create a new plan
  app.post("/movies", function(req, res) {
    connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      // Send back the ID of the new movie
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });
  
  // Update a movie
  app.put("/movies/:id", function(req, res) {
    connection.query("UPDATE movies SET movie = ? WHERE id = ?", [req.body.movie, req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });
  