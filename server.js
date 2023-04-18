const http = require('http');
const app = require('./app'); // importa app
const port = process.env.PORT || 3000; // ou porta local da maquina
const server = http.createServer(app);
server.listen(port);
