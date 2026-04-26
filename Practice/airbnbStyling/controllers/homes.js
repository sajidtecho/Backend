// This controller handles the logic for home-related routes
// We store the homes in an array for now (this will reset if the server restarts)
const registeredHomes = [];

// Exports the function to render the "Add Home" page
exports.getAddHome = (req, res, next) => {
    // We use res.render to serve the EJS template
    res.render('addHome', { 
        pageTitle: "Add New Home",
        path: '/host/add-home' // Useful for active navigation styling
    });
};

// Exports the function to handle the POST request when adding a new home
exports.postAddHome = (req, res, next) => {
    console.log("Home Registration Successful for:", req.body.houseName);
    
    // Add the new home data to our array
    registeredHomes.push({ 
        houseName: req.body.houseName,
        description: req.body.description 
    });
    
    // Redirect to the home page (root URL) after success
    res.redirect("/"); 
};

// Exports the function to render the home page with the list of homes
exports.getHomes = (req, res, next) => {
    // Pass the registeredHomes array to the home template
    res.render('home', { 
        pageTitle: "Airbnb Home",
        homes: registeredHomes,
        path: '/'
    });
};

// Also export the array if needed by other modules (like for the user router)
exports.registeredHomes = registeredHomes;
