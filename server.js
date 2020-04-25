const http = require('http');
const app = require('./app');
const port = process.env.port || 3001;

const server = http.createServer(app);
console.log(`API - running on ${port} port.`);
server.listen(port);