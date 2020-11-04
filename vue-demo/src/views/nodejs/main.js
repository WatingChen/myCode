// 引入 events 模块
// var events = require("events");

// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();

// // 创建事件处理程序
// var connectHandle = function connected() {
//     console.log("连接成功");

//     // 触发 data_received 事件 
//     eventEmitter.emit("data_received");
// }

// // 绑定事件及事件的处理程序
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandle);

// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function () {
//     console.log("数据接受成功");
// })
// // 触发事件
// // 触发 connection 事件 
// eventEmitter.emit("connection");

// console.log("程序执行完毕")


var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("fn1", function() {
    console.log("fn1")
})

var fun2 = function() {
    console.log("fun2")
    eventEmitter.emit("fn1")
}

eventEmitter.on("fn2", fun2)

eventEmitter.emit("fn2")

console.log('end')
// 返回指定事件的监听器数量
console.log(eventEmitter.listenerCount('fn2'))



























