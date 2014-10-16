var express = require('express');

// Constants
var PORT = 8085;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('My Node application !!\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
