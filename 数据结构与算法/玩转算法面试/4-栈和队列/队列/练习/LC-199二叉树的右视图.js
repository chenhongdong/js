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