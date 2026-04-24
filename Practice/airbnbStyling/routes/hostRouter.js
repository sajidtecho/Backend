const path = require('path');


const express = require('express');
const hostRouter = express.Router();

//local module
const rootDir = require("../utils/pathUtil");


hostRouter.get("/add-home", (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post("/add-home", (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;


