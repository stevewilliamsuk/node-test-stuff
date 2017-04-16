// require node http module
var http = require('http');

// create http server on port 8000, handle all requests with handleRequest method
http.createServer(handleRequest).listen(8000);

function handleRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}