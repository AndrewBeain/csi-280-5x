var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, world!");
});

var serverPort = 3000;
server.listen(serverPort);

console.log("Server listening at port ", serverPort);
