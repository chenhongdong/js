"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.data = new Array();
        // this.data = [62, 41, 30, 28, 16, 22, 13, 19, 17, 15];
    }
    // 返回堆中的元素个数
    MaxHeap.prototype.size = function () {
        return this.data.length;
    };
    // 返回一个布尔值，表示堆中是否为空
    MaxHeap.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    // 返回完全二叉树的数组表示中，索引所对应的父节点的索引
    MaxHeap.prototype.parent = function (index) {
        if (index === 0) {
            throw new Error('index-0不存在');
        }
        return parseInt((index - 1) / 2 + '');
    };
    // 返回完全二叉树的数组表示中，索引所对应的左子节点的索引
    MaxHeap.prototype.leftChild = function (index) {
        return 2 * index + 1;
    };
    // 返回完全二叉树的数组表示中，索引所对应的右子节点的索引
    MaxHeap.prototype.rightChild = function (index) {
        return 2 * index + 2;
    };
    // 向堆中添加元素
    MaxHeap.prototype.add = function (e) {
        this.data.push(e);
        this.siftUp(this.size() - 1);
    };
    // 堆的上浮
    MaxHeap.prototype.siftUp = function (i) {
        // 父节点的值比添加的子节点的值小，就进行值的互换
        while (i > 0 && this.data[this.parent(i)] - this.data[i] < 0) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    };
    // 交换位置
    MaxHeap.prototype.swap = function (i, j) {
        var tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    };
    // 查看堆中的最大元素
    MaxHeap.prototype.findMax = function () {
        if (this.data.length === 0) {
            throw new Error('堆为空，没有最大元素了');
        }
        return this.data[0];
    };
    // 取出堆中的最大元素
    MaxHeap.prototype.extractMax = function () {
        var res = this.findMax(); // 存一份最大元素
        this.swap(0, this.data.length - 1); // 最大元素和最后一个交换
        this.data.pop(); // 最大元素跑到最后一位，pop直接删除掉
        this.siftDown(0); // 维持堆的性质,进行堆的下沉
        // console.log(this.data);
        return res;
    };
    // 堆的下沉
    MaxHeap.prototype.siftDown = function (i) {
        while (this.leftChild(i) < this.size()) {
            var j = this.leftChild(i);
            if (j + 1 < this.size() && this.data[j + 1] - this.data[j] > 0) {
                j = this.rightChild(i);
            }
            // data[j] 是leftChild和rightChild中的最大值
            if (this.data[i] - this.data[j] >= 0) // 如果节点大于子节点就没必要再下沉了，直接break跳出
                break;
            this.swap(i, j);
            i = j;
        }
    };
    return MaxHeap;
}());
exports.default = MaxHeap;
/*
test

let n:number = 100;
let mh = new MaxHeap();

for (let i = 0; i < n; i++) {
    mh.add(Math.floor(Math.random() * n));
}
console.log(mh);

let arr:number[] = new Array(n);

for (let i = 0; i < n; i++) {
    arr[i] = mh.extractMax();
}
for(let i = 1; i< n; i++) {
    if (arr[i -1] < arr[i]) {
        throw new Error('Error');
    }
}

console.log('Test MaxHead Ok');
*/ 
