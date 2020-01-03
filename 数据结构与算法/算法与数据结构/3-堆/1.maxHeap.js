/* 
    最大堆
    parent(i) = Math.floor(i / 2)
    left child (i) = 2 * i
    right child (i) = 2 * i + 1
*/

class MaxHeap {
    /* constructor() {
        // this.data = new Array(capcity + 1).fill(0); // 索引从1开始，容量需要加上1
        this.data = [];
        this.count = 0;
    } */


    constructor(arr, n) {
        this.data = [];
        for (let i = 0; i < n; i++) {
            this.data.push(arr[i]);
        }
        // 最后一个非叶子节点的索引( (length - 1 )/ 2 )
        for (let i = parseInt((this.data.length-1) / 2); i >= 0; i--) {
            this._shiftDown(i);
        }
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.data.length === 0;
    }

    insert(item) {
        this.data.push(item);
        this._shiftUp(this.data.length - 1);
    }
    // 私有方法，堆的上浮shiftUp
    _shiftUp(i) {
        while (i > 1 && this.data[this._parent(i)] < this.data[i]) {
            this._swap(i, this._parent(i));
            i = this._parent(i);
        }
    }

    _swap(i, j) {
        let tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    }
    // 索引从0开始，堆的父级和左右子级
    _parent(i) {
        return parseInt((i - 1) / 2);
    }
    _leftChild(i) {
        return 2 * i + 1;
    }
    _rightChild(i) {
        return 2 * i + 2;
    }
    // 取出最大值,删除最大值，通过shiftDown保持最大堆的性质
    extractMax() {
        let res = this.data[0];

        this._swap(0, this.data.length - 1);
        this.data.pop();
        this._shiftDown(0);
        return res;
    }
    // 堆的下沉
    _shiftDown(i) {
        while (2 * i + 1 < this.data.length) {  // 有左孩子，完全二叉树中不可能只有右孩子没有左孩子
            let j = 2 * i + 1;  // 在此轮循环中，data[i]和data[j]交换位置
            // 比较左右两个孩子，谁大和谁交换
            if (j + 1 < this.data.length && this.data[j + 1] > this.data[j]) {   // 右孩子比左孩子大
                j += 1;
            }
            // 本身的值如果比子节点大，就不用交换break掉
            if (this.data[i] >= this.data[j])
                break;
            
            this._swap(i, j);
            i = j;
        }
    }
}


// 测试用例
/* let maxheap = new MaxHeap();

for (let i = 0; i < 15; i++) {
    maxheap.insert(i);
}
console.log(maxheap.data);
maxheap.extractMax()
console.log('one',maxheap);
maxheap.extractMax()
console.log('two',maxheap); */


module.exports = MaxHeap;