var express = require("express");
var path = require("path");

var app = express();
var friends = require("../data/friends");


// middleware that is specific to this router
app.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
})
// define the about route
app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

app.get('/api/friends', function (req, res) {
   return res.json(friends);
})

module.exports = app