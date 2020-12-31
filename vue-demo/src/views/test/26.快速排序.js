// 1. 快速排序

// 快排大概的流程是：

// 随机选择数组中的一个数 A，以这个数为基准
// 其他数字跟这个数进行比较，比这个数小的放在其左边，大的放到其右边
// 经过一次循环之后，A 左边为小于 A 的，右边为大于 A 的
// 这时候将左边和右边的数再递归上面的过程

function quickSort(array) {
    return quick(array, 0, array.length - 1)
}

function quick(array, leftIndex, rightIndex) {
    let index;
    if (array.length > 1) {
        index = partition(array, leftIndex, rightIndex);
        if (leftIndex < index - 1) {
            quick(array, leftIndex, index - 1)
        }
        if (rightIndex > index) {
            quick(array, index, rightIndex)
        }
    }
    return array
}
// 划分操作函数
function partition(array, leftIndex, rightIndex) {
    // 取中间值
    const pivot = array[Math.floor((leftIndex + rightIndex) / 2)];
    let i = leftIndex;
    let j = rightIndex;
    while (i <= j) {
        while (compare(array[i], pivot) === -1) {
            i++
        }
        while (compare(array[j], pivot) === 1) {
            j--
        }
        if (i <= j) {
            swap(array, i, j)
            i++
            j--
        }
    }
    return i
}
// 比较大小
function compare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
}
// 原地交换函数，而非用临时数组
function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
}

const Arr = [85, 24, 63, 45, 17, 31, 96, 50];
console.log(quickSort(Arr));