// Imports the express Node module.
var express = require('express');
var bodyParser = require('body-parser');

var util = require('./util');

// Creates an Express server.
var app = express();

// Defines what happens when it receives the `GET /` request
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(bodyParser.text());

// Handle POST /reverse [data]
app.post('/reverse', function (req, res) {
  // If the request came with text, then the text() middleware handled it
  // and made `req.body` a string.
  // Check that req.body is a string.
  if (typeof(req.body) === 'string') {
    var reversed = util.reverseString(req.body);
    res.send(reversed);
  } else {
    res.status(400).end()
  }
});


// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
