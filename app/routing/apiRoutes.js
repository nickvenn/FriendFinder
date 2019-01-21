var express = require('express')
var router = express.Router()
var friends = require("../data/friends");

// define the home page route
router.get('/api/friends', function (req, res) {
    return res.json(friends);
})
// define the about route
router.post('/api/friends', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

module.exports = router