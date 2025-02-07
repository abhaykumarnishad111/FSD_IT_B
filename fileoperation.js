const fs = require('fs');
fs.writeFileSync("data.txt", "Hello writing data using node js")
console.log("Data written successfully");

const rd = fs.readFileSync("data.txt", { encoding: 'utf-8' });
console.log(rd);