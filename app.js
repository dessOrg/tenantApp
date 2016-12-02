var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// Define the port to run on
app.set('port', 2000);

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));
app.use('/', express.static(__dirname + '/assets'));
app.use('/admin', express.static(__dirname + '/assets'));


require('./app/routes/index.js')(app);

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
