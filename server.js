// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var tables = [];
var waitList = [{
  name: "Yoda",
  phone: 123445345,
  email: "fdlgksd@gmail.com",
  id: "Yoda"
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
  // res.send("Welcome to the Restarant home Page!");
  // res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
  // console.log(waitList);
  // res.json(waitList);
  // res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
  // res.send("Welcome to the reserve Page!");
  // res.sendFile(path.join(__dirname, "add.html"));
});



// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         res.json(characters[i]);
//         return;
//       }
//     }

//     res.json(false);
//   }
//   else {
//     res.json(characters);
//   }
// });

// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
