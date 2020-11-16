function foo() {
    console.log(this.a)     // undefined
    // console.log(this === global)    // true (node js ==> global)
}
var a = 1
foo()

var obj = {
    a: 2,
    foo: foo
}
obj.foo()
// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况

// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
var c = new foo()
c.a = 3
console.log(c.a, "c.a")

// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new

function fna() {
    return () => {
        return () => {
            console.log(this)
        }
    }
}
console.log(fna()()())
// 箭头函数其实是没有this的，这个函数中的this只取决于他外面第一个不是箭头函数的函数的this。
// 在这个例子中，因为调用a符合前面代码中的第一个情况，所以this指向window。
// 并且this一旦绑定了上下文，就不会被任何代码改变
