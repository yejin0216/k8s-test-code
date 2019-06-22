var os = require('os');

var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end("내가 잡은 포켓몬 목록입니다.");
}
var www = http.createServer(handleRequest);
www.listen(8080);