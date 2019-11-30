const BST = require('./BST');

class BSTSet {
    consrtuctor() {
        this.bst = new BST();
    }

    getSize() {
        return this.bst.size();
    }

    isEmpty() {
        return this.bst.isEmpty();
    }

    add(e) {
        this.bst.add(e);
    }

    contains(e) {
        return this.bst.contains(e);
    }

    remove(e) {
        this.bst.remove(e);
    }
}