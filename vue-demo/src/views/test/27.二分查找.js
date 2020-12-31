// 二分查找法主要是解决「在一堆有序的数中找出指定的数」这类问题，不管这些数是一维数组还是多维数组，只要有序，就可以用二分查找来优化。
// 二分查找是一种「分治」思想的算法，大概流程如下：

// 数组中排在中间的数字 A，与要找的数字比较大小
// 因为数组是有序的，所以： a) A 较大则说明要查找的数字应该从前半部分查找 b) A 较小则说明应该从查找数字的后半部分查找
// 这样不断查找缩小数量级（扔掉一半数据），直到找完数组为止

// 题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

function Find(target, array) {
    let i = 0;
    let j = array[i].length - 1;
    while (j >= 0 && i < array.length) {
        if (target > array[i][j]) {
            i++
        } else if (target < array[i][j]) {
            j--
        } else {
            return true
        }
    }
    return false
}

let arr = [
    [1, 2, 3, 4],
    [5, 9, 10, 11],
    [13, 20, 21, 23]
];
let tar = 10;

console.log(Find(tar, arr));

