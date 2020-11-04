const { arguments } = require("file-loader");

/**
 * 实现Event(event bus)
 * event bus既是node中各个模块的基石，又是前端组件通信的依赖手段之一，同时涉及了订阅-发布设计模式，是非常重要的基础
 */
class EventEmeitter {
    constructor() {
        this._events = this._events || new Map();   // 储存事件/回调键值对
        this._maxListters = this._maxListters || 10;    // 设置监听上限
    }
}
// 触发名为type的事件
EventEmeitter.prototype.emit = function(type , ...args) {
    let handler;
    // 从储存的事件键值对的this._events中获取对应事件毁掉函数
    handler = this._events.get (type);
    if(args.length> 0) {
        handler.apply(this, args);
    } else {
        handler.call(this);
    }
    return true;
}
// 监听名为type的事件
EventEmeitter.prototype.addListener = function(type , fn) {
    // 将type事件以及对应的fn函数放入this._events中储存
    if(!this._events.get (type )) {
        this._events.set (type , fn);
    }
}

myChange(true, 1, 2);

let fn = (a, b) => {
    
}

const myChange = (isChange, ...args)=>{
    let changeArr = [...arguments];
    if(isChange) {
        changeArr.reverse();
    }
    console.log(fn.call(null, ...changeArr))
    return fn.call(null, ...changeArr);
}
