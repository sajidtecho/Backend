const db = require('../utils/database');

module.exports = class Home {
    constructor(houseName, description) {
        this.houseName = houseName;
        this.description = description;
    }

    // Method to save the current home instance to the database
    save() {
        return db.execute(
            'INSERT INTO homes (houseName, description) VALUES (?, ?)',
            [this.houseName, this.description]
        );
    }

    // Static method to fetch all homes from the database
    static fetchAll() {
        return db.execute('SELECT * FROM homes');
    }
};
