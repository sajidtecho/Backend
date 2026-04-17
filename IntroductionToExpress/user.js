const http = require('http');
const fs = require('fs');


//creating server
const server = http.createServer(function (req, res) {
    console.log(req.url, req.method, req.headers);

    //Routing request
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User Details</title></head>');
        res.write('<body>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" id="name" name="username" placeholder="Enter your name"><br><br>');
        res.write('<label for="gender">Gender</label><br>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }


    else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {

        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("Parsed Body:", parsedBody);

            const params = new URLSearchParams(parsedBody);
            const bodyObject = Object.fromEntries(params);
            console.log("Body Object:", bodyObject);

            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        return; // Important: don't execute code below while waiting for 'end' event
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

