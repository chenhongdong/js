/* 
    二分搜索树的优势
    查找表的实现  -  字典数据结构

    key value这样的数据对
    通过key就可以查到对应的value


    二分搜索树BST的优势：
    高效： 查找元素，插入元素，删除元素  时间复杂度都是O(logn)

*/
function Node(key, value) {
    this.key = key;
    this.value = value;
    this.left = this.right = null;
}

class BST {
    constructor() {
        this.root = null;
        this.count = 0;
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    insert(key, value) {
        this.root = this._insert(this.root, key, value);
    }
    _insert(node, key, value) {
        // 如果插入的新节点为null，就可以创建一个新的Node节点进行插入
        if (!node) {
            this.count++;
            return new Node(key, value);
        }

        // 要插入的key和node节点的key一样的话，就更新一下新的value
        if (key === node.key) {
            node.value = value;
        } else if (key < node.key) {
            node.left = this._insert(node.left, key, value);
        } else {
            node.right = this._insert(node.right, key, value);
        }
    }
    // 深度优先遍历O(n)
    // 前序遍历 -> 遍历每个节点
    // preOrder(node) {
    //     if (!node) {
    //         console.log(node.key);
    //         this.preOrder(node.left);
    //         this.preOrder(node.right);
    //     }
    // }
    // 前序遍历的非递归实现
    preOrder(node) {
        let stack = [];
        stack.push(node);
        while (stack.length) {
            let cur = stack.pop();
            console.log(cur);
            // 后进先出
            if (cur.right !== null) {
                stack.push(cur.right);
            }
            if (cur.left !== null) {
                stack.push(cur.left);
            }
        }
    }
    // 中序遍历 -> 可以实现从小到大排序
    inOrder(node) {
        if (!node) {
            this.inOrder(node.left);
            console.log(node.key);
            this.inOrder(node.right);
        }
    }
    // 后序遍历 -> 从叶子节点开始释放
    postOrder(node) {
        if (!node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.key);
        }
    }

    // 广度优先遍历O(n)
    levelOrder() {
        let q = [];
        q.push(this.root);
        while (q.legth) {
            let node = q.shift();
            console.log(node.key);

            if (node.left)
                q.push(node.left);
            if (node.right)
                q.push(node.right);
        }
    }
}