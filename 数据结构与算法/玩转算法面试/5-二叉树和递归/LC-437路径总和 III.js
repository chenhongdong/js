/* 
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11

链接：https://leetcode-cn.com/problems/path-sum-iii
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
 * @param {number} sum
 * @return {number}
 */

// 以root为根节点的二叉树中，寻找和为sum的路径，返回这样的路径个数
var pathSum = function(root, sum) {
    if (!root) {
        return 0;
    }
    let res = findPath(root, sum);
    res += pathSum(root.left, sum);
    res += pathSum(root.right, sun);

    return res;
};
// 在以root为根节点的二叉树中，寻找包含root的路径，和为sum
// 返回这样的路径个数
function findPath(root, sum) {
    if (!root) {
        return 0;
    }
    let res = 0;
    if (root.val === sum) {
        res++;
    }
    res += findPath(root.left, sum - root.val);
    res += findPath(root.right, sum - root.val);

    return res;
}