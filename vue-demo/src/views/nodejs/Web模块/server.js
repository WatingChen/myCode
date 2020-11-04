const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((request, response)=>{
    let pathname = url.parse(request.url).pathname;

    fs.readFile(pathname.substring(1),(err, res)=>{
        if(err) {
            console.log(err);
            response.writeHead(404,{"Content-Type":"text/html"});
        }else {
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(res.toString());
        }
        response.end();
    })
}).listen(8080)

console.log('Server running at http://127.0.0.1:8080/')
