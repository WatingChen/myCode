const fs = require("fs");
const data = "test222222";

const writeStream = fs.createWriteStream("output.txt");

writeStream.write(data, "UTF8");

writeStream.end();

writeStream.on("finish",()=>{
    console.log('finish');
})

writeStream.on("error",(err)=>{
    console.log(err);
})

// var read = fs.createReadStream('./test.txt');

// var write = fs.createWriteStream('./test.txt', { 'flags': 'a' });
// //管道流读写操作
// read.pipe(write);

console.log("end")

