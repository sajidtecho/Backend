// Import the Home model to handle data storage in JSON
const Home = require('../models/home');

// Exports the function to render the "Add Home" page
exports.getAddHome = (req, res, next) => {
    res.render('addHome', { 
        pageTitle: "Add New Home",
        path: '/host/add-home'
    });
};

// Exports the function to handle the POST request when adding a new home
exports.postAddHome = (req, res, next) => {
    const houseName = req.body.houseName;
    const description = req.body.description;
    
    // Create a new Home object and save it to the JSON file
    const home = new Home(houseName, description);
    home.save();
    
    console.log("Home saved to JSON successfully:", houseName);
    
    // Redirect to the home page (root URL) after saving
    res.redirect("/"); 
};

// Exports the function to render the home page with the list of homes
exports.getHomes = (req, res, next) => {
    // Fetch all homes using the static method from our model
    Home.fetchAll((homes) => {
        // Render the home template with the data fetched from JSON
        res.render('home', { 
            pageTitle: "Airbnb Home",
            homes: homes,
            path: '/'
        });
    });
};
