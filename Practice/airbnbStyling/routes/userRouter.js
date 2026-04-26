const express = require('express');
const userRouter = express.Router();

// Import the home controller
// This controller manages the logic for displaying homes
const homeController = require('../controllers/homes');

// GET request for the home page (root)
// We use homeController.getHomes to render the page with dynamic data
userRouter.get("/", homeController.getHomes);

module.exports = userRouter;