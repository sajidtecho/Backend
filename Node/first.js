console.log("Hello Sajid");


//write data to local file
const fs = require('fs');
fs.writeFile("output.txt", "Hello Sajid", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File created successfully");
    }
});