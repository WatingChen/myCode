var arr = [3, 1, 4, 6, 5, 7, 2];
var obj = {
    a: 1,
    b: 2
}

function bubbleSort(arr) {
    if (typeof arr === "object" && Object.prototype.toString.call(arr) === "[object Array]") {
        if (arr.length === 0) return [];
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                // 排序：正序/倒序
                if (arr[j] > arr[j + 1]) {
                    var temp;
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    } else {
        return new Error("请传入数组")
    }
}
// console.log(arr.splice(1,1))
console.log(bubbleSort(arr));
// console.log(bubbleSort(obj));

