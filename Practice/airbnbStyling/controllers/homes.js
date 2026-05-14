// Import the Home model to handle data storage in the database
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
    
    // Create a new Home object and save it to the database
    const home = new Home(houseName, description);
    home.save()
        .then(() => {
            console.log("Home saved to Database successfully:", houseName);
            // Redirect to the home page (root URL) after saving
            res.redirect("/"); 
        })
        .catch(err => {
            console.log("Error saving home to database:", err);
        });
};

// Exports the function to render the home page with the list of homes
exports.getHomes = (req, res, next) => {
    // Fetch all homes using the static method from our model
    Home.fetchAll()
        .then(([rows, fieldData]) => {
            // Render the home template with the data fetched from the database
            res.render('home', { 
                pageTitle: "Airbnb Home",
                homes: rows,
                path: '/'
            });
        })
        .catch(err => {
            console.log("Error fetching homes from database:", err);
        });
};
