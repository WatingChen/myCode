// 在调用 new 的过程中会发生四件事情
//   1.新生成了一个对象
//   2.链接到原型
//   3.绑定 this
//   4.返回新对象

// 根据以上几个过程，我们也可以试着来自己实现一个 new
//   1.创建一个空对象
//   2.获取构造函数
//   3.设置空对象的原型
//   4.绑定 this 并执行构造函数

function myNew() {
    // 1.创建一个新对象
    let newObj = {};
    // 2.获取构造函数
    let myConstructor = Array.prototype.shift.call(arguments);
    // let myConstructor = [].shift.call(arguments);
    // 连接新对象原型，新对象可以访问原型中的属性
    newObj.__proto__ = myConstructor.prototype;
    // 执行构造函数，即绑定 this，并且为这个新对象添加属性
    let result = myConstructor.apply(newObj, arguments);
    // 返回该新对象;根据规范，返回 null 和 undefined 不处理，依然返回obj
    return result instanceof Object ? result : newObj;
}

