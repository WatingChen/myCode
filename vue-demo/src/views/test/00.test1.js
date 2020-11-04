// reduce 不改变原数组

// 计算数组中每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let nameNum = names.reduce((pre, cur) => {
  if (cur in pre) {
    pre[cur]++
  } else {
    pre[cur] = 1
  }
  return pre
}, {})
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

// 数组去重
let arr = [1, 2, 3, 4, 4, 1]
let newArr = arr.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    return pre.concat(cur)
  } else {
    return pre
  }
}, [])
console.log(newArr);// [1, 2, 3, 4]

// 将二维数组转化为一维
let arr1 = [[0, 1], [2, 3], [4, 5]]
let newArr1 = arr1.reduce((pre, cur) => {
  return pre.concat(cur)
}, [])
console.log(newArr1); // [0, 1, 2, 3, 4, 5]

// 将多维数组转化为一维
let arr2 = [[0, 1], [2, 3], [4, [5, 6, 7]]]
const newArr2 = function (arr) {
  return arr.reduce((pre, cur )=> pre.concat(Array.isArray(cur) ? newArr2(cur) : cur), [])
}
console.log(newArr2(arr2)); //[0, 1, 2, 3, 4, 5, 6, 7]

// 对象里的属性求和
var result = [
  {
    subject: 'math',
    score: 10
  },
  {
    subject: 'chinese',
    score: 20
  },
  {
    subject: 'english',
    score: 30
  }
];

var sum = result.reduce(function (prev, cur) {
  return cur.score + prev
}, 0);
console.log(sum) //60
