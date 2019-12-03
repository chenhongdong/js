/* 
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
例如:
给定二叉树: [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：
[
  [3],
  [9,20],
  [15,7]
]
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
*/

function Pair(node, level) {
    this.node = node;
    this.level = level;
}

var levelOrder = function(root) {
    let res = [];
    if (!root) {
        return res;
    }
    // 声明一个队列结构
    let q = [];
    q.push(new Pair(root, 0));

    while (q.length) {
        let {node, level} = q.shift();
        // 如果level等于数组res的长度，说明这一层还没有加到res当中
        if (level === res.length) {
            res.push([]);   // 就把空数组加入到res里去
        }

        res[level].push(node.val);

        if (node.left) {
            q.push(new Pair(node.left, level + 1));
        }
        if (node.right) {
            q.push(new Pair(node.right, level + 1));
        }
    }
    return res;
};