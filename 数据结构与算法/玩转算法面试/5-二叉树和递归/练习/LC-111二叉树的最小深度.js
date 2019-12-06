/* 
给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
说明: 叶子节点是指没有子节点的节点。

示例:
给定二叉树 [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.

链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
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
 * @return {number}
 */

/* 
时间复杂度：我们访问每个节点一次，时间复杂度为 O(N)O(N) ，其中 NN 是节点个数。
空间复杂度：最坏情况下，整棵树是非平衡的，例如每个节点都只有一个孩子，递归会调用 NN （树的高度）次，因此栈的空间开销是 O(N)O(N)。但在最好情况下，树是完全平衡的，高度只有 \log(N)log(N)，因此在这种情况下空间复杂度只有 O(\log(N))O(log(N))
*/
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    // 叶子节点的情况（叶子节点没有左右子节点）
    if (!root.left && !root.right) {
        return 1;
    }

    let min = Number.MAX_SAFE_INTEGER;
    
    if (root.left) {
        min = Math.min(minDepth(root.left), min);
    }
    if (root.right) {
        min = Math.min(minDepth(root.right), min);
    }

    return min + 1;
};