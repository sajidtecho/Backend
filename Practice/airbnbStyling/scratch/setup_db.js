const mysql = require('mysql2/promise');

async function setup() {
    const configs = [
        { host: 'localhost', user: 'root', password: 'root' },
        { host: 'localhost', user: 'root', password: '' },
        { host: 'localhost', user: 'root', password: 'password' }
    ];

    let connection;
    let successfulConfig;

    for (const config of configs) {
        try {
            connection = await mysql.createConnection(config);
            successfulConfig = config;
            console.log(`Successfully connected with password: "${config.password}"`);
            break;
        } catch (err) {
            console.log(`Failed with password: "${config.password}" - ${err.message}`);
        }
    }

    if (!connection) {
        console.error("Could not connect to MySQL with any common password. Please check your MySQL service and credentials.");
        process.exit(1);
    }

    try {
        await connection.query('CREATE DATABASE IF NOT EXISTS airbnb');
        await connection.query('USE airbnb');
        await connection.query(`
            CREATE TABLE IF NOT EXISTS homes (
                id INT NOT NULL AUTO_INCREMENT,
                houseName VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
            )
        `);
        console.log("Database and table 'homes' are ready!");
        
        // Return the successful config to be used in database.js
        return successfulConfig;
    } catch (err) {
        console.error("Error during database setup:", err.message);
        process.exit(1);
    } finally {
        await connection.end();
    }
}

setup().then((config) => {
    if (config) {
        console.log("SUCCESS_CONFIG:" + JSON.stringify(config));
    }
});
