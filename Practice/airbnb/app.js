const express = require('express');

const app = express();

app.arguments((req, res, next) => {
    console.log(req.urlreq.method);
    next();
});

app.get("/", (req, res, next) => {

    res.send(
        `<h1>Welcome to airbnb</h1> <br>
        <a href="/add-home">Add Home</a>
        `);
});

app.get("/add-home", (req, res, next) => {
    res.send(
        `<h1> Add Home </h1>
        <form action="/add-home" method="POST">
            <input type="text" name="title" placeholder="Title">
            <button type="submit">Add Home</button>
        </form>
        `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});