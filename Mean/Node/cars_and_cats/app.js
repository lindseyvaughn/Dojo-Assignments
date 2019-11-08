const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if (request.url === '/cars') {
        fs.readFile('views/car.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if(request.url.startsWith('/images')){
        console.log("Request url: "+request.url);
        fs.readFile(request.url.substring(1), (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('views/new.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("listening on port 7077");
