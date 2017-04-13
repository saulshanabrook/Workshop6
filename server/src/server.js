// Imports the express Node module.
var express = require('express');
var bodyParser = require('body-parser');

var util = require('./util');

// Creates an Express server.
var app = express();

app.use(bodyParser.text());


app.use(express.static('../client/build'));


// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
