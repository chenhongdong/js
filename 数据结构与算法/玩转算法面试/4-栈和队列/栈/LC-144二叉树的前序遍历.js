/* 
    给定一个二叉树，返回它的 前序 遍历
    输入: [1,null,2,3]  
        1
          \
           2
          /
         3 
    输出: [1,2,3]

    链接地址：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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

/* 
    正常的二叉树前/中/后序遍历，通过递归就可以实现，
    有的时候面试会问如果不用递归，用迭代的方式如何实现，就用到了系统栈的思路
*/


function Command(s, node) {
    this.s = s;
    this.node = node;
}

var preorderTraversal = function (root) {
    let res = [];
    if (!root) {
        return res;
    }
    let stack = [];
    stack.push(new Command('go', root));
    console.log(stack)
    while (stack.length !== 0) {
        let command = stack.pop();

        if (command.s === 'print') {
            res.push(command.node.val);
        } else {
            // right
            if (command.node.right) {
                stack.push(new Command('go', command.node.right));
            }
            if (command.node.left) {
                stack.push(new Command('go', command.node.left));
            }
            stack.push(new Command('print', command.node));
        }
    }
    return res;
};


