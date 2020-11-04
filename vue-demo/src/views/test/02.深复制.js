//深复制
const newObj = JSON.parse(JSON.stringify(oldObj));
/**
 * 局限性：
 * 1.无法实现对函数、RegExp等特殊对象的克隆
 * 2.会抛弃对象的constructor,所有的构造函数会指向Object
 * 3.对象有循环引用，会报错
 */

const deepCopy = (obj) => {
    let result;
    // 判断是否是简单数据类型
    if (typeof obj == "object") {
        // 复杂数据类型
        result = obj.constructor === Array ? [] : {};
        for (let i in obj) {
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
        }
    } else {
        // 简单数据类型，直接 == 赋值
        result = obj
    }
    return result;
}