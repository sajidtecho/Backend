/**
 * Concept: Node.js Core Modules & CommonJS
 */
const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // Home Page
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Calculator Home</title>
            <style>
                body { font-family: sans-serif; padding: 20px; color: #333; }
                a { color: #007bff; text-decoration: none; }
            </style>
        </head>
        <body>
            <h1>Calculator App</h1>
            <p>A simple addition tool built with Node.js.</p>
            <a href="/calculator">Go to Calculator</a>
        </body>
        </html>
        `);
        return res.end();
    }

    // Calculator Form Page
    if (url.toLowerCase() === '/calculator' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Simple Calculator</title>
            <style>
                body { font-family: sans-serif; padding: 20px; }
                .form-group { margin-bottom: 10px; }
                input { padding: 5px; margin-top: 5px; width: 200px; }
                button { padding: 5px 15px; cursor: pointer; }
            </style>
        </head>
        <body>
            <h2>Simple Addition</h2>
            <form action="/calculate" method="POST">
                <div class="form-group">
                    <label>First Number:</label><br>
                    <input type="number" name="num1" required>
                </div>
                <div class="form-group">
                    <label>Second Number:</label><br>
                    <input type="number" name="num2" required>
                </div>
                <button type="submit">Calculate Result</button>
            </form>
            <br>
            <a href="/">Back to Home</a>
        </body>
        </html>
        `);
        return res.end();
    }

    // Process calculation
    if (url === '/calculate' && method === 'POST') {
        return sumRequestHandler(req, res);
    }

    // 404
    res.statusCode = 404;
    res.write('<h1>404 Not Found</h1>');
    return res.end();
}

exports.requestHandler = requestHandler;
