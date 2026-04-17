const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("Middleware executed", req.url, req.method);
    next();
});

const userRoutes = require('./user');
app.use(userRoutes);

app.listen(3002, () => {
    console.log("Server running on");
});
