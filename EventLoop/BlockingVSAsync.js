const fs = require('fs');

console.log('1. Start of script');

// Synchronous (blocking) operation
console.log('2. Reading file synchronously');
try {
    const dataSync = fs.readFileSync('user-details.txt', 'utf8');
    console.log('3. Synchronous read complete');
} catch (err) {
    console.error('Error reading file synchronously:', err.message);
}

// Asynchronous (non-blocking) operation
console.log('4. Reading file asynchronously');
fs.readFile('user-details.txt', 'utf8', (err, dataAsync) => {
    if (err) {
        console.error('Error reading file asynchronously:', err.message);
        return;
    }
    console.log('6. Asynchronous read complete');
});

console.log('5. End of script');
