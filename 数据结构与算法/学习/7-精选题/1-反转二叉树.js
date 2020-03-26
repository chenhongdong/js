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




function reverseBTree(node) {
    if (!node) {
        return;
    }
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    reverseBTree(node.left);
    reverseBTree(node.right);
}
