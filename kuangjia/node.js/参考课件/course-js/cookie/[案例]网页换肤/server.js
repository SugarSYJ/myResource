var PORT = 3000;
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var contenttype = require('./contentType');

var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname
    if (pathname.slice(-1) === "/") {
        pathname += 'index.html'; //默认取当前默认下的index.html
    }
    var realPath = path.join(process.cwd(), pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function(exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write('This request URL' + pathname + ' was not found on this server.');
            response.end();
        } else {
            fs.readFile(realPath, 'binary', function(err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = contenttype.types[ext] || 'text/plain';
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, 'binary');
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);

console.log('Server running at http://localhost:' + PORT);
