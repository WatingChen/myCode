/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

  示例 1：

  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[1,2,3,6,9,8,7,4,5]

 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let newArr = [];
    let length = matrix[0].length;
    while(length) {
        newArr.push(...matrix[0]);
    }
};