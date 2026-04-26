//core module
const path = require('path')


const express = require('express');

//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

// Setting up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // Tells Express where to find our .ejs files

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
    // Render the 404 EJS template
    res.status(404).render('404', { pageTitle: "Page Not Found" });
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});