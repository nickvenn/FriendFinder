const routes = require('express').Router();

var friends = require('../data/friends.js')

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
routes.get('/api/friends', (req, res) => {
    res.send(friends);
});

// A POST routes /api/friends. This will be used to handle incoming survey results.
//  This route will also be used to handle the compatibility logic.
routes.post('/api/friends', (req, res) => {
    
  });

module.exports = routes;