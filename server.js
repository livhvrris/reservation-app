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


// Reservation Info (DATA)
// =============================================================
var tables = [{
  customerName: "Yoda",
  customerNumber: 123445345,
  customerEmail: "fdlgksd@gmail.com",
  customerID: "YodaY"
  },
  {
  customerName: "Mary",
  customerNumber: 123345,
  customerEmail: "fdld@gmail.com",
  customerID: "MaryM"
  }
];
var waitList = [];


// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/tables", function(req, res) {
  var newguest = req.body;
console.log(req.body);
if (tables.length<5) {
  console.log("Five reservations");
  tables.push(newguest);
}
else {waitList.push(newguest)};

  res.json(newguest);

});

console.log(waitList);

 app.get("/api/tables", function (req, res) {
  res.json(tables);
 });

  app.get("/api/waitList", function (req, res) {
  res.json(waitList);
 });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
