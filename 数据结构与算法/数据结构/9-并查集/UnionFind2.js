/*
    并查集也是一种树的结构
    只不过它是由子指向父的
*/
var UnionFind2 = /** @class */ (function () {
    function UnionFind2(size) {
        for (var i = 0; i < size; i++) {
            this.parent.push(i);
        }
    }
    UnionFind2.prototype.getSize = function () {
        return this.parent.length;
    };
    // 查找过程，查找元素p所对应的集合编号
    // O(h)复杂度，h为树的高度
    UnionFind2.prototype.find = function (p) {
        if (p > 0 && p <= this.parent.length) {
            while (p !== this.parent[p]) {
                p = this.parent[p];
            }
            return p;
        }
    };
    // 查看元素p和元素q是否属于一个集合
    // O(h)复杂度，h为树的高度
    UnionFind2.prototype.isConnected = function (p, q) {
        return this.find(p) === this.find(q);
    };
    // 合并元素p和元素q所属的集合
    // O(h)复杂度，h为树的高度
    UnionFind2.prototype.unionElements = function (p, q) {
        var pRoot = this.find(p);
        var qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        // p元素所在元素的根节点，指向了q元素所在的根节点
        this.parent[pRoot] = qRoot;
    };
    return UnionFind2;
}());
