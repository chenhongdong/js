// Quick Union
class UnionFind {
    parent = [];
    count = 0;
    constructor(n) {
        this.count = n;
        for (let i = 0; i < n; i++)
            this.parent.push(i);
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

        if (pRoot === qRoot) return;

        this.parent[pRoot] = qRoot;
    }
}