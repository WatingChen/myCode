const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json)

const copy = JSON.parse(json,(key, value)=>{
    return value && value.type === "Buffer" ? Buffer.from(value.data) : value;
})

console.log(copy)

var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
// 返回一个多个成员合并的新 Buffer 对象
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

var buffer4 = Buffer.from('ABC');
var buffer5 = Buffer.from('ABCD');
// 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。-1  0  1
var result = buffer4.compare(buffer5);
console.log(result)     // -1
