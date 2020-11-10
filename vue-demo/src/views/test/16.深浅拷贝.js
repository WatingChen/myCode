let a = {
    age: 1
}
let b = a;
b.age = 2;
// console.log(a.age, b.age)   // 2 2

// 决绝办法
// 浅拷贝
// 方式1：通过 Object.assign 来解决这个问题
let c = Object.assign({}, a);
c.age = 3
// console.log(c.age, a.age)   // 3 2

// 方式2：通过展开运算符（…）来解决
let d = { ...a };
d.age = 5;
console.log(d.age, a.age)   //5 2
// 浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到刚开始的话题了，两者享有相同的引用。要解决这个问题，我们需要引入深拷

// 深拷贝
// 通常可以通过 JSON.parse(JSON.stringify(object)) 来解决
let aa = {
    age: 1,
    jobs: {
        first: 'aa'
    }
}
let bb = JSON.parse(JSON.stringify(aa))
bb.jobs.first = 'bb'
console.log(aa.jobs.first, bb.jobs.first) // aa bb
// 局限:
//      会忽略 undefined
//      不能序列化函数
//      不能解决循环引用的对象

// 当然如果你的数据中含有以上三种情况下，可以使用 lodash 的深拷贝函数。

// 递归：
function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                //判断ojb子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

// 深浅拷贝方式可参考：https://www.jianshu.com/p/1c142ec2ca45

// 实现深拷贝的方法:
// （1）采用递归去拷贝所有层级属性
// （2） 通过JSON对象来实现深拷贝
// 缺点： 无法实现对对象中方法的深拷贝，会显示为undefined
// （3）通过jQuery的extend方法实现深拷贝
// （4）lodash函数库实现深拷贝
// （5）Reflect法
// （6）手动实现深拷贝
// （7）如果对象的value是基本类型的话，也可以用Object.assign来实现深拷贝，但是要把它赋值给一个空对象
// （8）用slice实现对数组的深拷贝
// （9）用concat实现对数组的深拷贝
// （10）直接使用var newObj = Object.create(oldObj)，可以达到深拷贝的效果。
// （11）使用扩展运算符实现深拷贝