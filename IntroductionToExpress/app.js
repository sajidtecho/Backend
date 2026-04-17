//core module
const http = require('http');

//external module
const express = require('express');
const app = express();

//local module
// const requestHandler = require('./user'); // Note: user.js is currently starting its own server rather than exporting a request handler.

// use the express 'app' to handle requests
const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


