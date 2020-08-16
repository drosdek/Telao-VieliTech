const server = require('http-server');

server.createServer({
	cache: false,
}).listen({
	port: 8080,
	path: '0.0.0.0',
});