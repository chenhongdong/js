class BST {
    constructor(e) {
        this.e = e;
        this.left = null;
        this.right = null;
        this.size = 0;
        this.root = null;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    add(node, e) {
        if (e === node.e) {
            return;
        } else if (e < node.e) {
            
        }
    }
}

module.exports = BST;