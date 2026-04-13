/**
 * Concept: Streams & Buffers
 * Why: We receive data in chunks and merging them to read the POST body.
 */
const sumRequestHandler = (req, res) => {
    const body = [];
    
    // Step 1: Listen for data chunks (Stream)
    req.on('data', (chunk) => {
        body.push(chunk);
    });

    // Step 2: Once the stream ends, process the data
    req.on('end', () => {
        // Concatenate chunks into a single readable string
        const parsedBody = Buffer.concat(body).toString();
        
        // Parse the URL-encoded data (e.g., num1=5&num2=10)
        const params = new URLSearchParams(parsedBody);
        const num1 = parseFloat(params.get('num1')) || 0;
        const num2 = parseFloat(params.get('num2')) || 0;
        const result = num1 + num2;

        // Step 3: Send a simple, clean response
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <style>
                body { font-family: sans-serif; padding: 20px; color: #333; }
                .result-text { font-size: 20px; color: #000; margin: 20px 0; }
                a { color: #007bff; text-decoration: none; }
            </style>
        </head>
        <body>
            <h1>Calculation Result</h1>
            <p class="result-text">The sum of <strong>${num1}</strong> and <strong>${num2}</strong> is: <strong>${result}</strong></p>
            <hr>
            <a href="/calculator">Calculate again</a> | <a href="/">Back to Home</a>
        </body>
        </html>
        `);
        return res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;