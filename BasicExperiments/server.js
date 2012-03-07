var http = require("http");
var url  = require("url");

function start(route)
{
    function onRequest(request, response)
    {
        console.log("Request received.");

        pathname = url.parse(request.url).pathname;

        route(pathname);

        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;