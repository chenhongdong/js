// 路径压缩，find
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
            this.parent[p] = this.parent[this.parent[p]];   // 路径压缩
            p = this.parent[p];
        }
        return p;

        // 利用递归，路径压缩为只有两层的高度
        // 不过递归有一定的时间消耗，会比上面的慢一点
        /* if (p !== this.parent[p])
             this.parent[p] = this.find(this.parent[p]);
           return this.parent[p]; */
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