function Nodes(isWord = false) {
    this.isWord = isWord;
    this.next = new Map();
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new Nodes();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
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
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
        const c = word.charAt(i);
        if (!cur.next.has(c)) {
            return false;
        }
        cur = cur.next.get(c);
    }
    return cur.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
        const c = prefix.charAt(i);
        if (!cur.next.has(c)) {
            return false;
        }
        cur = cur.next.get(c);
    }
    return true;
};

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // 返回 true
console.log(trie.search("app"));     // 返回 false
console.log(trie.startsWith("app")); // 返回 true
trie.insert("app");   
console.log(trie.search("app"));     // 返回 true