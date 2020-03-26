// 基于size的优化，取决于谁的元素多少
class UnionFind {
    parent = [];
    count = 0;
    sz = [];

    constructor(n) {
        this.count = n;
        this.sz = new Array(n).fill(1);
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
        // 这样做会使得合并的树层树更少
        // 将元素少的集合并到元素多的集合中去
        if (this.sz[pRoot] > this.sz[qRoot]) {
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        } else {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        }
    }
}