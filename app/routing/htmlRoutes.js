var express = require("express");
var path = require("path");

var app = express();
// process.env.PORT
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});