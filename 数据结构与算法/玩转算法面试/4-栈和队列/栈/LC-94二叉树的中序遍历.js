/* 
    给定一个二叉树，返回它的中序 遍历。
    输入: [1,null,2,3]
        1
          \
           2
          /
         3 
    输出: [1,3,2]
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function Command(s, node) {
    this.s = s;
    this.node = node;
}

var inorderTraversal = function (root) {
    let res = [];
    if (!root) {
        return res;
    }
    // 声明一个栈
    let stack = [];
    stack.push(new Command('go', root));
    // 遍历栈
    while (stack.length) {
        let command = stack.pop();  // 拿出栈顶元素，出栈

        if (command.s === 'print') {
            res.push(command.node.val);
        } else {
            if (command.node.right) {
                stack.push(new Command('go', command.node.right));
            }
            stack.push(new Command('print', command.node));
            if (command.node.left) {
                stack.push(new Command('go', command.node.left));
            }
        }
    }
    return res;
};