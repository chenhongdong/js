//  基于rank的优化
// rank[i]表示根节点为i的树的高度
class UnionFind {
    parent = [];
    count = 0;
    rank = [];
    constructor(n) {
        this.count = n;
        this.rank = new Array(n).fill(1);
        for (let i = 0; i < n; i++) {
            this.parent.push(i);
        }
    }

    find(p) {
        while (p !== this.parent[p]) {
            p = this.parent[p];
        }
        return p;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    union(p, q) {
        let pRoot = this.find(p),
            qRoot = this.find(q);

        if (pRoot === qRoot)
            return;
        
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        } else if (this.rank[qRoot] < this.rank[pRoot]) {
            this.parent[qRoot] = pRoot;
        } else {    // rank[pRoot] === rank[qRoot]
            this.parent[pRoot] = qRoot;
            this.rank[qRoot] += 1;
        }
    }
}