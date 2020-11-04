/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root, result = []) {
  if (!root) return [];
  let queue = [root];
  let level = 0;
  // for (let i = 0; i < queue.length; i++) {
  //   result[level] = [];
  //   let newLength = queue.length;
  //   while (newLength--) {
  //     let res = queue.shift();
  //     result[level].push(res.val);
  //     if (res.left) queue.push(res.left);
  //     if (res.right) queue.push(res.right);
  //   }
  //   level++
  // }
  while(queue.length) {
    result[level] = [];
    let newLength = queue.length;
    while(newLength--) {
      let res = queue.shift();
      result[level].push(res.val);
      if(res.left) queue.push(res.left);
      if(res.right) queue.push(res.right);
    }
    level++
  }
  return result;
};
const root = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  }
}
console.log(`levelOrder`, levelOrder(root)); //[ [ 1 ], [ 2, 3 ], [ 4, 5 ] ]