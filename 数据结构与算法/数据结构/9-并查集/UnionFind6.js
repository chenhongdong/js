// 路径压缩find，递归到底，有一定的递归消耗，比UF5略差一点点
var UnionFind6 = /** @class */ (function () {
    function UnionFind6(size) {
        for (var i = 0; i < size; i++) {
            this.parent.push(i);
            this.rank.push(1);
        }
    }
    UnionFind6.prototype.getSize = function () {
        return this.parent.length;
    };
    UnionFind6.prototype.find = function (p) {
        if (p > 0 && p < this.parent.length) {
            if (p !== this.parent[p]) {
                this.parent[p] = this.find(this.parent[p]);
            }
            return this.parent[p];
        }
    };
    UnionFind6.prototype.isConnected = function (p, q) {
        return this.find(p) === this.find(q);
    };
    UnionFind6.prototype.unionElements = function (p, q) {
        var pRoot = this.find(p), qRoot = this.find(q), _a = this, parent = _a.parent, rank = _a.rank;
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
    return UnionFind6;
}());
