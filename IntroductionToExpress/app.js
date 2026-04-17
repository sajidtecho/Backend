//core module
const http = require('http');

//external module
const express = require('express');
const app = express();

//local module
const testingSyntax = require('./user');

// const { requestHandler } = require('./handler'); // Commented out as handler.js does not exist in this folder
const server = http.createServer(requestHandler);

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


