var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index')
})

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;
});