// window.name = "ByteDance";
// function A () {
//     this.name = 123;
// }

// A.prototype.getA = function() {
//     console.log(this);
//     return this.name + 1;
// }

// let a = new A();
// let funcA = a.getA;
// funcA();


// function GetBytes(str) {

//     var len = str.length;

//     var bytes = len;

//     for (var i = 0; i < len; i++) {
//         if (str.charCodeAt(i) > 255) bytes++;

//     }

//     return bytes;

// }

// console.log(GetBytes("你好,as"));
// console.log(GetBytes(","));

// 实现bind方法
// Function.prototype.bind = function (ctx) {
//     var fn = this;
//     return function () {
//         fn.apply(ctx, arguments)
//     }
// }

// 实现clone函数
Object.prototype.clone = function() {
    var o = this.constructor;
    for(var e in this) {
        o[e] = typeof this[e] == "object" ? this[e].clone() : this[e]
    }
}
