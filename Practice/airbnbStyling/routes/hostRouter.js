const path = require('path');


const express = require('express');
const hostRouter = express.Router();

//local module
const rootDir = require("../utils/pathUtil");


hostRouter.get("/add-home");


hostRouter.post("/add-home", (req, res) => {
    console.log("Home Registration Successfull for:", req.body, req.body.houseName);
    registredHomes.push({ houseName: req.body.houseName });
    //redirect to home page
    res.redirect("/home");
});

module.exports = hostRouter;


