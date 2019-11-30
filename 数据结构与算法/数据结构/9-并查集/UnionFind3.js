var UnionFind3 = /** @class */ (function () {
    function UnionFind3(size) {
        for (var i = 0; i < size; i++) {
            this.parent.push(i);
            this.sz.push(1);
        }
    }
    UnionFind3.prototype.getSize = function () {
        return this.parent.length;
    };
    UnionFind3.prototype.find = function (p) {
        if (p > 0 && p <= this.parent.length) {
            while (p !== this.parent[p]) {
                p = this.parent[p];
            }
        }
        return p;
    };
    UnionFind3.prototype.isConnected = function (p, q) {
        return this.find(p) === this.find(q);
    };
    UnionFind3.prototype.unionElements = function (p, q) {
        var pRoot = this.find(p);
        var qRoot = this.find(q);
        if (pRoot === qRoot)
            return;
        // 将元素少的集合，合并到元素多的集合，维持树的高度不会太深
        if (this.sz[pRoot] < this.sz[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        }
        else {
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    };
    return UnionFind3;
}());
