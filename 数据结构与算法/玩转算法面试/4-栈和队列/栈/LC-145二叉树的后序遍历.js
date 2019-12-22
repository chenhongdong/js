/* 
    给定一个二叉树，返回它的 后序 遍历
    输入: [1,null,2,3]  
        1
          \
           2
          /
         3 
    输出: [3,2,1]

    链接地址：https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
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

// 辅助类Command
function Command(s, node) {
    this.s = s;
    this.node = node;
}

var postorderTraversal = function(root) {
    let res = [];
    if (!root) {
        return res;
    }
    let stack = [];
    stack.push(new Command('go', root));

    while (stack.length) {
        let command = stack.pop();

        if (command.s === 'print') {
            res.push(command.node.val);
        } else {
            stack.push(new Command('print', command.node));
            if (command.node.right) {
                stack.push(new Command('go', command.node.right));
            }
            if (command.node.left) {
                stack.push(new Command('go', command.node.left));
            }
        }
    }
    return res;
};