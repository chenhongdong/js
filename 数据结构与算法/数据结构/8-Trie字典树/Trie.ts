// Trie只处理字符串

class Trie {
    private root: Nodes;
    private size: number;

    constructor() {
        this.root = new Nodes();
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    // 向Trie中添加一个新的单词word
    insert(word: String) {
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
            this.size++;
        }
    }
    // 查询单词word是否在Trie中
    search(word: String) {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            const c = word.charAt(i);
            if (!cur.next.has(c)) {
                return false;
            }
            cur = cur.next.get(c);
        }
        return cur.isWord;
    }
    // 查询是否在Trie中有单词以prefix为前缀
    startsWith(prefix: String) {
        let cur = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const c = prefix.charAt(i);
            if (!cur.next.has(c))) {
                return false;
            }
            cur = cur.next.get(c);
        }
        return true;
    }
}

class Nodes {
    isWord:boolean;
    next:any;

    constructor(isWord = false) {
        this.isWord = isWord;
        this.next = new Map();
    }
}



// test
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // 返回 true
console.log(trie.search("app"));     // 返回 false
console.log(trie.startsWith("app")); // 返回 true
trie.insert("app");   
console.log(trie.search("app"));     // 返回 true
