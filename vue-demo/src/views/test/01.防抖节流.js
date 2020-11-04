// 防抖
const debounce = (func, wait = 50) => {
    let timer = 0;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}
// 节流
const throttle = (func, wait = 50) => {
    let lastTime = 0;
    return function (...args) {
        let now = +new Date()
        if (now - lastTime > wait) {
            lastTime = now
            func.apply(this, args)
        }
    }
}
