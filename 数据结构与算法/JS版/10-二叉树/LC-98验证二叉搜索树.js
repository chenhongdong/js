/* 
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：
    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。

输入:
    2
   / \
  1   3
输出: true
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
var isValidBST = function(root) {
    
};


class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class BST {
    constructor(data) {
        let root = new Node(data.shift());
        // 遍历所有的数据，逐渐插入到当前搜索树中
        data.forEach(item => {
            this.insert(root, item);
        });
        return root;
    }

    insert(node, data) {
        if (node.val > data) {  // node大于该值，说明在node的左子树上
            if (!node.left) {
                node.left = new Node(data);
            } else {
                this.insert(node.left, data);
            }
        } else {
            if (!node.right) {
                node.right = new Node(data);
            } else {
                this.insert(node.right, data);
            }
        }
    }

/* 
    10
   / \
  5   15
     / \
    6  20
*/

    walk(root,low,high) {
        if (!root) {
            return true;
        }
        let val = root.val;
        if ((low !== null && val <= low) || (high !== null && val >= high)) {
            return false;
        }
        if (!this.walk(root.right, val, high) || !this.walk(root.left, low, val)) {
            return false;
        }
        return true;
    }

    isValidBST(root) {
        return this.walk(root,null,null);
    }
}