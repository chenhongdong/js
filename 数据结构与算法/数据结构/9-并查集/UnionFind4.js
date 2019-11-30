var UnionFind4 = /** @class */ (function () {
    function UnionFind4(size) {
        for (var i = 0; i < size; i++) {
            this.parent.push(i);
            this.rank.push(1);
        }
    }
    UnionFind4.prototype.getSize = function () {
        return this.parent.length;
    };
    UnionFind4.prototype.find = function (p) {
        if (p > 0 && p <= this.parent.length) {
            while (p !== this.parent[p]) {
                p = this.parent[p];
            }
            return p;
        }
    };
    UnionFind4.prototype.isConnected = function (p, q) {
        return this.find(p) === this.find(q);
    };
    UnionFind4.prototype.unionElements = function (p, q) {
        var pRoot = this.find(p), qRoot = this.find(q);
        if (pRoot === qRoot)
            return;
        // 比较两个节点所在树的高度，低的合并到高的上去
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        }
        else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot;
        }
        else { // 如果合并时两个根节点的高度相同，就把合并后的根节点的高度提高一层
            this.parent[qRoot] = pRoot;
            this.rank[pRoot] += 1;
        }
    };
    return UnionFind4;
}());
