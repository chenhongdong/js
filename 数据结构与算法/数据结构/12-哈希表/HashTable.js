class HashTable {
    constructor(M = 97) {
        this.M = M;
        this.size = 0;
        this.hashtable = new Array(M);
        for (let i = 0; i < M; i++) {
            this.hashtable[i] = new Map();
        }
    }
    hash(key) {
        return;
    }
}
