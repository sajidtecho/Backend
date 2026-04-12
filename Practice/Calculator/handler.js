const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write('<body><h1>Welcome to the Calculator Server</h1></body>');
    res.write('</html>');
    res.end();
}

exports.requestHandler = requestHandler;