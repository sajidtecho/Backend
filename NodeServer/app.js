const http = require('http');


//creating server
const server = http.createServer(function (req, res) {
    console.log(req.url, req.method, req.headers);


    //Routing request
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body><h1>About Page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello Sajid</h1></body>');
    res.write('</html>');
    res.end();

    // process.exit(); //stop event loop 
});

//listening to port 3000
server.listen(3000, function () {
    console.log('Server running on port 3000');
});