const app = require('express')();
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');


app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());


//  Connect all our routes to our application
app.use('/', routes);
// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Start the server
app.set('port', process.env.PORT || 4000);
 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});