function Nodes(isWord = false) {
    this.isWord = isWord;
    this.next = new Map();
}
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new Nodes();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
        const c = word.charAt(i);
        if (!cur.next.has(c)) {
            cur.next.set(c, new Nodes());
        }
        cur = cur.next.get(c);
    }
    if (!cur.isWord) {
        cur.isWord = true;
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return match(this.root, word, 0);
};

function match(node, word, index) {
    if (index === word.length) {
        return node.isWord;
    }
    const c = word.charAt(index);
    
    if (c !== '.') {
        if (!node.next.has(c)) {
            return false;
        }
        return match(node.next.get(c), word, index + 1);
    } else {
        for (let key of node.next.keys()) {
            if (match(node.next.get(key), word, index + 1)) {
                return true;
            }
        }
        return false;
    }
}

let obj = new WordDictionary();
obj.addWord("bad")
obj.addWord("dad")
obj.addWord("mad")
console.log(obj.search("pad"))
console.log(obj.search("bad"));
console.log(obj.search(".ad"));
console.log(obj.search("b.."));


