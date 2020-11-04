const fs = require("fs");
var data = "";

const readerStream = fs.createReadStream("test.txt");

readerStream.setEncoding("utf-8");

readerStream.on("data", (chunk)=>{
    data += chunk;
})

readerStream.on("end",()=>{
    console.log(data);
})

readerStream.on("error", (err)=>{
    console.log(err.stack)
})

console.log("end")

