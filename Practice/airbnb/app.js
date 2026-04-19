const express = require('express');

app.use((req, resizeBy, next) => {
    console.log(req.url, req.method);
    res.send("<h>Welcome to airbnb</h>");
});






const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});