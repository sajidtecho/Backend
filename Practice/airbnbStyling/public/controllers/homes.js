module.exports.getAddHome = (req, res, next) => {
    res.render('addHome', { pageTitle: "Add New Home" });
};

module.exports.postAddHome = (req, res, next) => {
    console.log("Home Registration Successfull for:", req.body, req.body.houseName);
    registredHomes.push({ houseName: req.body.houseName });
    //redirect to home page
    res.redirect("/home");
};

module.exports.getRegisteredHomes = (req, res, next) => {
    res.render('registeredHomes', { pageTitle: "Registered Homes", homes: registredHomes });
}

module.exports.postRegisteredHomes = (req, res, next) => {

}

module.exports.registredHomes = [];