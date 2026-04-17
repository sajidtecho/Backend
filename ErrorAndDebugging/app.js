const http = require('http');
const testingSyntax = require('./syntax');
// const { requestHandler } = require('./handler'); // Commented out as handler.js does not exist in this folder

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    testingSyntax();
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


