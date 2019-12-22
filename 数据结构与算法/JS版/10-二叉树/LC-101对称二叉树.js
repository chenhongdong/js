/* 
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
    1
   / \
  2   2
 / \ / \
3  4 4  3
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
 * @return {boolean}
 */
var isSymmetric = function (root) {

};

class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Tree {
    constructor(data) {
        // 临时存储所有节点，方便寻找父子节点
        let nodeList = [];
        // 根节点
        let root = null;
        for (let i = 0; i < data.length; i++) {
            let node = new Node(data[i]);
            nodeList.push(data[i]);

            if (i > 0) {
                // 计算当前节点属于哪一层
                let n = Math.floor(Math.sqrt(i + 1));
                // 记录当前层的起始点
                let q = Math.pow(2, n) - 1;
                // 记录上一层的起始点
                let p = Math.pow(2, n - 1) - 1;
                // 找到当前节点的父节点
                let parent = nodeList[p + Math.floor((i - q) / 2)];
                // 将当前节点和父节点做关联
                if (parent.left) {
                    parent.right = node;
                } else {
                    parent.left = node;
                }
            }
        }
        root = nodeList.shift();
        nodeList.length = 0;    // 释放掉临时数组
        return root;
    }

    static isSymmetric(root) {
        if (!root) return true;

        let walk = (left, right) => {
            if (!left && !right) {  // 终止条件
                return true;
            }
            if ((left && !right) || (!left && right) || (left.val !== right.val)) {
                return false;
            }

            return walk(left.left, right.right) && walk(left.right, right.left);
        };

        return walk(root.left, root.right);
    }
}