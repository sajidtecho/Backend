const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

// Path to the JSON file where homes will be stored
const p = path.join(rootDir, 'data', 'homes.json');

// Helper function to read from the file
const getHomesFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            // If file doesn't exist, return empty array
            callback([]);
        } else {
            try {
                callback(JSON.parse(fileContent));
            } catch (e) {
                callback([]);
            }
        }
    });
};

module.exports = class Home {
    constructor(houseName, description) {
        this.houseName = houseName;
        this.description = description;
    }

    // Method to save the current home instance to the JSON file
    save() {
        getHomesFromFile(homes => {
            homes.push(this);
            // Write updated array back to the JSON file
            fs.writeFile(p, JSON.stringify(homes, null, 2), (err) => {
                if (err) console.log("Error saving home:", err);
            });
        });
    }

    // Static method to fetch all homes from the JSON file
    static fetchAll(callback) {
        getHomesFromFile(callback);
    }
};
