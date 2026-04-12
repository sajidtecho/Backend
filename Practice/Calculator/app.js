const http = require('http');
const handler = require('./handler');

const server = http.createServer(handler.requestHandler);

const PORT = 3000;
server.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});


