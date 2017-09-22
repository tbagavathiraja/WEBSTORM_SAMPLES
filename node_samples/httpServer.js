var http = require('http');
var fs = require('fs');
var url = require('url');
// Create a server
http.createServer( function (request, response) {
// Parse the request containing file name
// Print the name of the file for which request is made.
    console.log("Request for " +request.url + " received.");
// Read the requested file content from file system
response.write("<h1>WWWWWWW</h1>")
// Send the response body
        response.end();
}).listen(8081);