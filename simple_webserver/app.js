/**
 * 
 */
var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('<h1>Hello NodeJs Banana</h1>');
}).listen(8080, function() {
	console.log("server is listening on 8080");
});