/* 
给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
例如：
给定二叉树 [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层次遍历如下：
[
  [3],
  [20,9],
  [15,7]
]

链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
*/


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


var zigzagLevelOrder = function (root) {
    let res = [];
    if (!root) {
        return res;
    }
    let q = [];
    let index = 0;
    q.push(root);

    while (q.length) {
        let len = q.length;
        let tmp = [];
        for (let i = 0; i < len; i++) {
            let node = q.shift();

            if (index % 2 === 0) {
                tmp.push(node.val);
            } else {
                tmp.unshift(node.val);
            }
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
            res.push(tmp);
            index++;
        }
    }

    return res;
};

