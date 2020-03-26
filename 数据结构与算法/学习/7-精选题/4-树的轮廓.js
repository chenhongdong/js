// 树的表述
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(9);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(3);
root.right.right.left = new TreeNode(8);

/* 
    ? 求一个二叉树从左侧看的轮廓，如图，返回[1,5,4,8]?如果求每行最大值，返回[1,9,7,8]该如何做？
            1
        5       9
      4   2   7   3       
                  8

    树的左侧轮廓，表示的是从左边看只能看到[1,5,4,8]这几个值
*/

// 解法 递归 + 决策树
function leftoutlineTree(node, d = 0, outline = []) {   // 深度优先搜索
    if (!node) {
        return;
    }
    if (!outline[d]) {
        outline[d] = node.value;
    }
    leftoutlineTree(node.left, d + 1, outline);
    leftoutlineTree(node.right, d + 1, outline);
    return outline;
}

/* 
    outline数组来存最左边的树
*/

console.log(leftoutlineTree(root));     // [1, 5, 4, 8]


// 解法  求每行最大值
function maxOfLine(node, d = 0, outline = []) {
    if (!node) {
        return;
    }
    outline[d] = Math.max(outline[d] || -1, node.value);
    
    maxOfLine(node.left, d + 1, outline);
    maxOfLine(node.right, d + 1, outline);
    return outline;
}
console.log(maxOfLine(root));           // [1, 9, 7, 8]