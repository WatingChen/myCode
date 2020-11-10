// Service workers 本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步API

// 目前该技术通常用来做缓存文件，提高首屏速度

// index.js
if (navigator.serviceWorker) {
    navigator.serviceWorker
        .register("sw.js")
        .then(function (registration) {
            console.log("service worker 注册成功");
        })
        .catch(function (err) {
            console.log("servcie worker 注册失败");
        });
}
// sw.js
// 监听 `install` 事件，回调中缓存所需文件
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("my-cache").then(function (cache) {
            return cache.addAll(["./index.html", "./index.js"]);
        })
    );
});

// 拦截所有请求事件
// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response) {
                return response;
            }
            console.log("fetch source");
        })
    );
});

// 打开页面，可以在开发者工具中的 Application 看到 Service Worker 已经启动了
// 在 Cache 中也可以发现我们所需的文件已被缓存
// 当我们重新刷新页面可以发现我们缓存的数据是从 Service Worker 中读取的