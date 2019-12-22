/* 
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
示例:
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
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
 * @return {number[]}
 */

// 方法1： 递归 + 决策
var rightSideView = function(root, res = [], h = 0) {
    if (!root) {
        return res;
    }
    if (!res[h]) {
        res[h] = root.val;  // [1]
    }
    rightSideView(root.right, res, h + 1);
    rightSideView(root.left, res, h + 1);
    return res;
};


// 方法2： 队列
var rightSideView2 = function(root) {
    let res = [];
    if (!root) {
        return res;
    }
    let q = [];
    q.push(root);

    while (q.length) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();
            // 遍历二叉树的每一层，当为最后一个的时候，就表示是右节点了
            if (i === len - 1) {
                res.push(node.val);
            }
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
    }
    return res;
};