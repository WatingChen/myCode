const fs = require("fs");

const renderStream = fs.createReadStream("test.txt");

const writeStream = fs.createWriteStream("output.txt");

renderStream.pipe(writeStream);

console.log("end")