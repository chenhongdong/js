class UnionFind {
    id = [];
    count = 0;
    constructor(n) {
        this.count = n;
        for (let i = 0; i < n; i++) {
            this.id.push(i);
        }
    }
    // Quick Find 时间复杂度O(1)
    find(p) {
        return this.id[p];
    }
    // 是否连接
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // Union 时间复杂度O(n)
    union(p, q) {
        let pId = this.find(p),
            qId = this.find(q);
            
        if (pId === qId) return;
        
        for (let i = 0; i < this.count; i++) {  // O(n)
            if (this.id[i] === pId) 
                this.id[i] = qId;
        }
    }
}