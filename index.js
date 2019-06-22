var os = require('os');

var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end("안녕하세요!\n포켓몬 고에 오신 것을 환영합니다.");
}
var www = http.createServer(handleRequest);
www.listen(8080);