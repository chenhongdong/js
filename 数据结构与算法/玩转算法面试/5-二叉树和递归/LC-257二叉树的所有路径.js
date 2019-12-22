/* 
给定一个二叉树，返回所有从根节点到叶子节点的路径。
说明: 叶子节点是指没有子节点的节点。
示例:
输入:
   1
 /   \
2     3
 \
  5
输出: ["1->2->5", "1->3"]
解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

链接：https://leetcode-cn.com/problems/binary-tree-paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }
    let res = [];
    // 递归终止条件，当到达了叶子节点的时候
    if (!root.left && !root.right) {
        res.push(root.val + '');    // 把值转成字符串类型
        return res;
    }

    let leftStr = binaryTreePaths(root.left);
    for (let i = 0; i < leftStr.length; i++) {
        res.push(root.val + '->' + leftStr[i]);
    }

    let rightStr = binaryTreePaths(root.right);
    for (let i = 0; i < rightStr.length; i++) {
        res.push(root.val + '->' + rightStr[i]);
    }

    return res;
};