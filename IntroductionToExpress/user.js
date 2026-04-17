const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <html>
        <head><title>User Details</title></head>
        <body>
            <form action="/submit-details" method="POST">
                <input type="text" name="username" placeholder="Enter your name"><br><br>
                <input type="radio" name="gender" value="male"> Male
                <input type="radio" name="gender" value="female"> Female<br><br>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

router.post('/submit-details', (req, res) => {
    const body = req.body;

    fs.writeFileSync('user.txt', JSON.stringify(body));

    res.redirect('/');
});

module.exports = router;