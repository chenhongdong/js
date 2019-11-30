/*
    红黑树添加新元素
        2-3树中添加一个新元素
        添加进2节点，形成一个3节点
        添加进3节点，暂时形成一个4节点
        永远添加红色节点
*/
var RED = true;
var BLACK = false;
var Nodes = /** @class */ (function () {
    function Nodes(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.color = RED;
    }
    return Nodes;
}());
var RBTree = /** @class */ (function () {
    function RBTree() {
        this.root = null;
        this.size = 0;
    }
    RBTree.prototype.getSize = function () {
        return this.size;
    };
    RBTree.prototype.isEmpty = function () {
        return this.size == 0;
    };
    // 判断节点node的颜色
    RBTree.prototype.isRed = function (node) {
        if (node === null)
            return BLACK;
        return node.color;
    };
    // 向红黑树中添加新的元素(key, value)
    RBTree.prototype.add = function (key, value) {
        this.root = this.insert(this.root, key, value);
        this.root.color = BLACK; //最终根节点为黑色节点
    };
    /*
                   左旋转
            node             x           node.right = x.left;
            /  \            / \          x.left = node
           T1   x        node  T3        x.color = node.color
               / \      /    \           node.color = RED
              T2 T3    T1    T2
    */
    RBTree.prototype.leftRotate = function (node) {
        var x = node.right;
        // 左旋转
        node.right = x.left;
        x.left = node;
        // 维持颜色
        x.color = node.color;
        node.color = RED;
        return x;
    };
    /*
                    右旋转
            node            x               node.left = T1
            /  \           / \              x.right = node
           x    T2        y  node           x.color = node.color
          / \                /  \           node.color = RED
         y   T1             T1  T2
    */
    RBTree.prototype.rightRotate = function (node) {
        var x = node.left;
        // 右旋转
        node.left = x.right;
        x.right = node;
        x.color = node.color;
        node.color = RED;
        return x;
    };
    // 颜色翻转
    RBTree.prototype.flipColors = function (node) {
        node.color = RED;
        node.left.color = BLACK;
        node.right.color = BLACK;
    };
    // 向以node为根的红黑树中插入元素(key, value)，递归算法
    // 返回插入新节点后红黑树的根
    RBTree.prototype.insert = function (node, key, value) {
        if (node === null) {
            this.size++;
            return new Nodes(key, value);
        }
        if (key < node.key)
            node.left = this.insert(node.left, key, value);
        else if (key > node.key)
            node.right = this.insert(node.right, key, value);
        else // key === node.key
            node.value = value;
        return node;
    };
    // 返回以node为根节点的红黑树中，key所在的节点
    RBTree.prototype.getNode = function (node, key) {
        if (node == null)
            return null;
        if (key === node.key)
            return node;
        else if (key < node.key)
            return this.getNode(node.left, key);
        else // if(key.compareTo(node.key) > 0)
            return this.getNode(node.right, key);
    };
    RBTree.prototype.contains = function (key) {
        return this.getNode(this.root, key) != null;
    };
    RBTree.prototype.get = function (key) {
        var node = this.getNode(this.root, key);
        return node == null ? null : node.value;
    };
    RBTree.prototype.set = function (key, newValue) {
        var node = this.getNode(this.root, key);
        if (node == null)
            throw new Error(key + " doesn't exist!");
        node.value = newValue;
    };
    // 返回以node为根的红黑树的最小值所在的节点
    RBTree.prototype.minimum = function (node) {
        if (node.left == null)
            return node;
        return this.minimum(node.left);
    };
    // 删除掉以node为根的红黑树中的最小节点
    // 返回删除节点后新的红黑树的根
    RBTree.prototype.removeMin = function (node) {
        if (node.left == null) {
            var rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }
        node.left = this.removeMin(node.left);
        return node;
    };
    // 从红黑树中删除键为key的节点
    RBTree.prototype.remove = function (key) {
        var node = this.getNode(this.root, key);
        if (node != null) {
            this.root = this.removeNode(this.root, key);
            return node.value;
        }
        return null;
    };
    RBTree.prototype.removeNode = function (node, key) {
        if (node == null)
            return null;
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else { // key.compareTo(node.key) == 0
            // 待删除节点左子树为空的情况
            if (node.left == null) {
                var rightNode = node.right;
                node.right = null;
                this.size--;
                return rightNode;
            }
            // 待删除节点右子树为空的情况
            if (node.right == null) {
                var leftNode = node.left;
                node.left = null;
                this.size--;
                return leftNode;
            }
            // 待删除节点左右子树均不为空的情况
            // 找到比待删除节点大的最小节点, 即待删除节点右子树的最小节点
            // 用这个节点顶替待删除节点的位置
            var successor = this.minimum(node.right);
            successor.right = this.removeMin(node.right);
            successor.left = node.left;
            node.left = node.right = null;
            return successor;
        }
    };
    return RBTree;
}());
