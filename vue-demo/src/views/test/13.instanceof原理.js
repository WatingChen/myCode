function my_instanceof(left, right) {
    const _prototype = right.prototype;
    while (true) {
        if (left === null) {
            return false
        }
        if (left === _prototype) {
            return true
        }

        left = left.__proto__;
    }
}