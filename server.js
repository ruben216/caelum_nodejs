var http = require('http');

http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<h1>Ola , a partir do arquivo server.js ;D</h1> ');
}).listen(3000,'localhost');

console.log('Executando a partir do servidor localhost porta 3000...');
