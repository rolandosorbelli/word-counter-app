var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile("dog.txt", "utf8", function (error, data) {
    res.end(data)
    });
});
server.listen(8000);
console.log('The server is running...')