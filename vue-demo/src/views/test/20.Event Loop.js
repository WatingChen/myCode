// 事件循环机制 Event Loop

// JS
// 众所周知 JS 是门非阻塞单线程语言，因为在最初 JS 就是为了和浏览器交互而诞生的。如果 JS 是门多线程的语言话，我们在多个线程中处理 DOM 就可能会发生问题（一个线程中新加节点，另一个线程中删除节点）
// JS 在执行的过程中会产生执行环境，这些执行环境会被顺序的加入到执行栈中。如果遇到异步的代码，会被挂起并加入到 Task（有多种 task） 队列中。一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为
// 不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
});

console.log('script end');
// script start => Promise => script end => promise1 => promise2 => setTimeout

// 正确的一次 Event loop 顺序是这样的
// 执行同步代码，这属于宏任务
// 执行栈为空，查询是否有微任务需要执行
// 执行所有微任务
// 必要的话渲染 UI
// 然后开始下一轮 Event loop，执行宏任务中的异步代码
// 通过上述的 Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的响应界面响应，我们可以把操作 DOM 放入微任务中


// Node 中的 Event loop
// Node 中的 Event loop 和浏览器中的不相同。
// Node 的 Event loop 分为6个阶段，它们会按照顺序反复运行
