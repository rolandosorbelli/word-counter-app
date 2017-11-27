var http = require('http');
var fs = require('fs');
var WordCount = require('./src/wordCount');

var server = http.createServer(function (req, res) {
	var count = new WordCount();
});
server.listen(8000);
console.log('The server is running...')