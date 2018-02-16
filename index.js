var http = require('http');
http.createServer(function (req, res) {
    res.end('Hello World');
}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerra!');