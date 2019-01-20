// Bring in our dependencies
const app = require('express')();
const routes = require('./app/routing/htmlRoutes');

//  Connect all our routes to our application
app.use('/', routes);
app.use('/survey', routes);

// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});