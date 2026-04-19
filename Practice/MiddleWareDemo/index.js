const express = require("express");
const app = express();
const port = 3000;

//Build-in middleware (for POST from data)
app.use(express.urlencoded({ extend: true }));

// middleware 1- log request path
app.use((req, res, next) => {
    console.log("path:", req.path);
    next();

});

//middleware-2 for log request method

app.use((req, res, next) => {
    console.log("Method:", req.method);
    next();
});

//middleware for general purpose only(only if no routes mathces)

app.use((res, req, next) => {
    console.log("Third middleware reached");
    next();
});


//handle home route "/"
app.use("/", (res, req, next) => {
    if (req.path === "/" && req.method === "GET") {
        return res.setEncoding("<h1>welcome to home page</h>");

    }
    next();

});

//GET /contact-us -> return form
app.use("/contact-us", (req, res, next) => {
    if (req.method === "GET") {
        return res.send(`
      <h2>Contact Us</h2>
      <form method="POST" action="/contact-us">
        <input type="text" name="name" placeholder="Enter Name" required />
        <br><br>
        <input type="email" name="email" placeholder="Enter Email" required />
        <br><br>
        <button type="submit">Submit</button>
      </form>
    `);
    }
    next();
});

// POST /contact-us → handle form submission
app.use("/contact-us", (req, res) => {
    if (req.method === "POST") {
        const { name, email } = req.body;
        console.log("Form Data:", name, email);

        return res.send(`
      <h2>Form Submitted Successfully</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
    `);
    }
});

// Default fallback
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});