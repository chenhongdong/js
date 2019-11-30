class HashTable {
    private hashtable;
    private M:number;
    private size:number;

    constructor(M:number = 97) {
        this.M = M;
        this.size = 0;
        this.hashtable = new Array(M);
        for (let i = 0; i < M; i++) {
            this.hashtable[i] = new Map();
        }
    }

    private hash(key):number {
        return 
    }
}