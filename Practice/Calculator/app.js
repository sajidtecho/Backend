const http = require('http');
const handler = require('./handler');

http.createServer(handler.requestHandler);

const PORT = 3000;
Server.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});


