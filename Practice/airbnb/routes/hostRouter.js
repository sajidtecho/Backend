const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res) => {
    res.send(`
        <h1>Add Home</h1>
        <form action="/host/add-home" method="POST">
            <input type="text" name="houseName" placeholder="Enter house name">
            <button type="submit">Add Home</button>
        </form>
    `);
});

hostRouter.post("/host/add-home", (req, res) => {
    res.send(
        `<h1>Home Regiteres Successfully</h1>
        <a href="/">Go to Home</a>`
    );

});

module.exports = hostRouter;


