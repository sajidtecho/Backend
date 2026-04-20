const express = require('express');

//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h1>")
});



app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});