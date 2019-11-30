class SegmentTree {
    private data: number[];
    private tree: number[];

    constructor(arr: number[]) {
        this.data = new Array(arr.length);
        for (let i = 0; i < arr.length; i++) {
            this.data[i] = arr[i];
        }

        this.tree = new Array(4 * arr.length);
        this.buildSegmentTree(0, 0, this.data.length - 1);
    }
    // 在treeIndex的位置创建表示区间[l...r]的线段树
    buildSegmentTree(treeIndex: number, l: number, r: number) {
        if (l === r) {
            this.tree[treeIndex] = this.data[l];
            return;
        }

        let leftTreeIndex: number = this.leftChild(treeIndex);
        let rightTreeIndex: number = this.rightChild(treeIndex);

        let mid = parseInt(l + (r - l) / 2 + '');  // (l+r) / 2也行
        this.buildSegmentTree(leftTreeIndex, l, mid);
        this.buildSegmentTree(rightTreeIndex, mid + 1, r);
        // 这里的业务逻辑是求和操作 
        this.tree[treeIndex] = this.tree[leftTreeIndex] + this.tree[rightTreeIndex];
    }

    getSize(): number {
        return this.data.length;
    }

    get(index: number) {
        if (index > 0 && index <= this.data.length) {
            return this.data[index];
        }
    }

    leftChild(index: number): number {
        return 2 * index + 1;
    }

    rightChild(index: number): number {
        return 2 * index + 2;
    }
    // 查询
    query(queryL: number, queryR: number) {
        if (queryL > 0 || queryL <= this.data.length ||
            queryR > 0 || queryR <= this.data.length || queryL < queryR) {
            return this.queryRec(0, 0, this.data.length - 1, queryL, queryR);
        }
    }
    queryRec(treeIndex: number, l: number, r: number, queryL: number, queryR: number) {
        if (l === queryL && r === queryR) {
            return this.tree[treeIndex];
        }
        let mid = parseInt((l + r) / 2 + '');
        let leftIndex = this.leftChild(treeIndex);
        let rightIndex = this.rightChild(treeIndex);

        if (queryL >= mid + 1) {
            return this.queryRec(rightIndex, mid + 1, r, queryL, queryR);
        } else if (queryR <= mid) {
            return this.queryRec(leftIndex, l, mid, queryL, queryR);
        }
        // 查询的区间在左右两边都有时
        let leftResult = this.queryRec(leftIndex, l, mid, queryL, mid);
        let rightResult = this.queryRec(rightIndex, mid + 1, r, mid + 1, queryR);
        return leftResult + rightResult;
    }

    // 更新
    set(index: number, e: number) {
        if (index > 0 || index <= this.data.length) {
            this.data[index] = e;
            this.update(0, 0, this.data.length - 1, index, e);
        }
    }
    update(treeIndex: number, l: number, r: number, index: number, e: number) {
        if (l === r) {
            this.tree[treeIndex] = e;
            return;
        }
        let mid = parseInt((l + r) / 2 + '');
        let leftIndex = this.leftChild(treeIndex);
        let rightIndex = this.rightChild(treeIndex);
        if (index >= mid + 1) {
            this.update(rightIndex, mid + 1, r, index, e);
        } else {
            this.update(leftIndex, l, mid, index, e);
        }

        this.tree[treeIndex] = this.tree[leftIndex] + this.tree[rightIndex];
    }

    toString(): String {
        let str = '';
        str += '[';
        for (let i = 0; i < this.tree.length; i++) {
            let tree = this.tree;
            if (tree[i] !== null) {
                str += tree[i];
            } else {
                str += 'null';
            }
            if (i !== tree.length - 1) {
                str += ', ';
            }
        }
        str += ']';
        return str;
    }
}

module.exports = SegmentTree;

// let nums = [-2, 0, 3, -5, 2, -1];
// let segTree = new SegmentTree(nums);
// let res1 = segTree.query(0, 2);
// let res2 = segTree.query(2, 5);
// let res3 = segTree.query(0, 5);
// console.log('查询结构', res1, res2, res3);  // 0, -1, -4
// console.log(segTree.toString())