/* 
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]

链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
*/

// 方法1，计算树的高度，然后level--，效率不高
function Pair(node, level) {
    this.node = node;
    this.level = level;
}

function maxDepth(node) {
    if (!node) return 0;
    let left = maxDepth(node.left);
    let right = maxDepth(node.right);
    return Math.max(left, right) + 1;
}

var levelOrderBottom = function(root) {
    let res = [];
    if (!root) {
        return res;
    }
    // 树的高度
    let h = maxDepth(root);
    for (let i = 0; i < h; i++) {
        res.push([]);
    }
    let q = [];
    q.push(new Pair(root, h - 1));

    while (q.length) {
        let {node, level} = q.shift();

        res[level].push(node.val);

        if (node.left) {
            q.push(new Pair(node.left, level - 1));
        }
        if (node.right) {
            q.push(new Pair(node.right, level - 1));
        }
    }
    return res;
};


// 方法2，正常的做层序遍历，最后进行一次reverse反转即可，效率比方法1高多了
var levelOrderBottom = function(root) {
    let res = [];
    if (!root) {
        return res;
    }
    let q = [];
    q.push(new Pair(root, 0));

    while(q.length) {
        let {node, level} = q.shift();

        if (level === res.length) {
            res.push([]);
        }
        res[level].push(node.val);

        if (node.left) {
            q.push(new Pair(node.left, level + 1));
        }
        if (node.right) {
            q.push(new Pair(node.right, level + 1));
        }
    }
    // 反转数组
    res.reverse();
    return res;
}