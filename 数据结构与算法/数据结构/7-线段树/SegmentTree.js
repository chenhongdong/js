var SegmentTree = /** @class */ (function () {
    function SegmentTree(arr) {
        this.data = new Array(arr.length);
        for (var i = 0; i < arr.length; i++) {
            this.data[i] = arr[i];
        }
        this.tree = new Array(4 * arr.length);
        this.buildSegmentTree(0, 0, this.data.length - 1);
    }
    // 在treeIndex的位置创建表示区间[l...r]的线段树
    SegmentTree.prototype.buildSegmentTree = function (treeIndex, l, r) {
        if (l === r) {
            this.tree[treeIndex] = this.data[l];
            return;
        }
        var leftTreeIndex = this.leftChild(treeIndex);
        var rightTreeIndex = this.rightChild(treeIndex);
        var mid = parseInt(l + (r - l) / 2 + ''); // (l+r) / 2也行
        this.buildSegmentTree(leftTreeIndex, l, mid);
        this.buildSegmentTree(rightTreeIndex, mid + 1, r);
        // 这里的业务逻辑是求和操作 
        this.tree[treeIndex] = this.tree[leftTreeIndex] + this.tree[rightTreeIndex];
    };
    SegmentTree.prototype.getSize = function () {
        return this.data.length;
    };
    SegmentTree.prototype.get = function (index) {
        if (index > 0 && index <= this.data.length) {
            return this.data[index];
        }
    };
    SegmentTree.prototype.leftChild = function (index) {
        return 2 * index + 1;
    };
    SegmentTree.prototype.rightChild = function (index) {
        return 2 * index + 2;
    };
    // 查询
    SegmentTree.prototype.query = function (queryL, queryR) {
        if (queryL > 0 || queryL <= this.data.length ||
            queryR > 0 || queryR <= this.data.length || queryL < queryR) {
            return this.queryRec(0, 0, this.data.length - 1, queryL, queryR);
        }
    };
    SegmentTree.prototype.queryRec = function (treeIndex, l, r, queryL, queryR) {
        if (l === queryL && r === queryR) {
            return this.tree[treeIndex];
        }
        var mid = parseInt((l + r) / 2 + '');
        var leftIndex = this.leftChild(treeIndex);
        var rightIndex = this.rightChild(treeIndex);
        if (queryL >= mid + 1) {
            return this.queryRec(rightIndex, mid + 1, r, queryL, queryR);
        }
        else if (queryR <= mid) {
            return this.queryRec(leftIndex, l, mid, queryL, queryR);
        }
        // 查询的区间在左右两边都有时
        var leftResult = this.queryRec(leftIndex, l, mid, queryL, mid);
        var rightResult = this.queryRec(rightIndex, mid + 1, r, mid + 1, queryR);
        return leftResult + rightResult;
    };
    // 更新
    SegmentTree.prototype.set = function (index, e) {
        if (index > 0 || index <= this.data.length) {
            this.data[index] = e;
            this.update(0, 0, this.data.length - 1, index, e);
        }
    };
    SegmentTree.prototype.update = function (treeIndex, l, r, index, e) {
        if (l === r) {
            this.tree[treeIndex] = e;
            return;
        }
        var mid = parseInt((l + r) / 2 + '');
        var leftIndex = this.leftChild(treeIndex);
        var rightIndex = this.rightChild(treeIndex);
        if (index >= mid + 1) {
            this.update(rightIndex, mid + 1, r, index, e);
        }
        else {
            this.update(leftIndex, l, mid, index, e);
        }
        this.tree[treeIndex] = this.tree[leftIndex] + this.tree[rightIndex];
    };
    SegmentTree.prototype.toString = function () {
        var str = '';
        str += '[';
        for (var i = 0; i < this.tree.length; i++) {
            var tree = this.tree;
            if (tree[i] !== null) {
                str += tree[i];
            }
            else {
                str += 'null';
            }
            if (i !== tree.length - 1) {
                str += ', ';
            }
        }
        str += ']';
        return str;
    };
    return SegmentTree;
}());
module.exports = SegmentTree;
// let nums = [-2, 0, 3, -5, 2, -1];
// let segTree = new SegmentTree(nums);
// let res1 = segTree.query(0, 2);
// let res2 = segTree.query(2, 5);
// let res3 = segTree.query(0, 5);
// console.log('查询结构', res1, res2, res3);  // 0, -1, -4
// console.log(segTree.toString())
