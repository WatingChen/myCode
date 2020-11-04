const fs = require("fs");

const zlib = require("zlib");

// 压缩
// fs.createReadStream("test.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("test.txt.gz"));

// 解压
fs.createReadStream("test.txt.gz").pipe(zlib.createUnzip()).pipe(fs.createWriteStream("test01.txt"))


console.log("end")