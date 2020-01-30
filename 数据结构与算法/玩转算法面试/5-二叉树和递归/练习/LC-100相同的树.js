/* 
给定两个二叉树，编写一个函数来检验它们是否相同。
如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:
输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:
输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false

链接：https://leetcode-cn.com/problems/same-tree 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 先判断p和q是否为null，再判断它们的值是否相等
var isSameTree = function(p, q) {
    // p和q都为null表示为true
    if (!p && !q) return true;
    // p或q有一个为null就为false
    if (!p || !q) return false;
    // 值不相等就为false
    if (p.val !== q.val) return false;

    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};