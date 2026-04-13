const requestHandler=(req,res)=>{
    
}

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Welcome to the Calculator</h1>
                <a href="/calculator">Go TO calculator</a> 
            </body>
        </html>
    `);
        return res.end();
    }
    else if (req.url.toLowerCase() === "/calculator") {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Here is the Calculator</h1>

                <form action="/calculator" method="POST">
                <input type="number" placeholder="Enter first number">
                <input type="number" placeholder="Enter second number">
                <button type="submit">Add</button>
                </form> 
          
            </body>
        </html>
    `);
        return res.end();

    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>404 page not found</h1>
                <a href="/">Go TO Home</a> 
            </body>
        </html>
    `);
    return res.end();
}

exports.requestHandler = requestHandler;