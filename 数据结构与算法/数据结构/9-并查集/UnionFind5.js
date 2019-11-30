// 路径压缩，find方法，时间消耗最少，性能最好
var UnionFind5 = /** @class */ (function () {
    function UnionFind5(size) {
        for (var i = 0; i < size; i++) {
            this.parent.push(i);
            this.rank.push(1);
        }
    }
    UnionFind5.prototype.getSize = function () {
        return this.parent.length;
    };
    UnionFind5.prototype.find = function (p) {
        if (p > 0 && p <= this.parent.length) {
            while (p !== this.parent[p]) {
                this.parent[p] = this.parent[this.parent[p]];
                p = this.parent[p];
            }
            return p;
        }
    };
    UnionFind5.prototype.isConnected = function (p, q) {
        return this.find(p) === this.find(q);
    };
    UnionFind5.prototype.unionElements = function (p, q) {
        var pRoot = this.find(p);
        var qRoot = this.find(q);
        var _a = this, parent = _a.parent, rank = _a.rank;
        if (pRoot === qRoot)
            return;
        if (rank[pRoot] < rank[qRoot]) {
            parent[pRoot] = qRoot;
        }
        else if (rank[pRoot] > rank[qRoot]) {
            parent[qRoot] = pRoot;
        }
        else {
            parent[qRoot] = pRoot;
            rank[pRoot] += 1;
        }
    };
    return UnionFind5;
}());
