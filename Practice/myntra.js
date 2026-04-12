const http = require('http');

const server = http.createServer(function (req, res) {
    console.log(req.url, req.method, req.headers);

    const url = req.url.toLowerCase();

    // Common HTML template
    function renderPage(title, content) {
        return `
        <html>
            <head>
                <title>${title}</title>
            </head>
            <body>
                <h1>Welcome to Myntra</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/men">Men</a></li>
                        <li><a href="/women">Women</a></li>
                        <li><a href="/kids">Kids</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </nav> 
                <hr>
                <h2>${content}</h2>
            </body>
        </html>
        `;
    }

    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.end(renderPage('Home', 'This is the Home Page'));
    }
    else if (url === '/men') {
        res.end(renderPage('Men', 'Welcome to Men Section'));
    }
    else if (url === '/women') {
        res.end(renderPage('Women', 'Welcome to Women Section'));
    }
    else if (url === '/kids') {
        res.end(renderPage('Kids', 'Welcome to Kids Section'));
    }
    else if (url === '/cart') {
        res.end(renderPage('Cart', 'Welcome to Cart Section'));
    }
    else {
        res.statusCode = 404;
        res.end(renderPage('404', 'Page Not Found'));
    }
});

server.listen(3000, function () {
    console.log('Server running on port 3000');
});