const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    res.send(`<h>Welcome to airbnb</h>`);
});






const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});