/* 
    索引堆 比普通的堆更高级
    
*/

class IndexMaxHeap {
    constructor() {
        this.data = [];
        this.indexes = [];
    }


    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.data.length === 0;
    }
    
    // 传入的i对用户而言，是从0索引的
    insert(i, item) {
        this.data.push(item);
        this.indexes.push(i);
        this._shiftUp(this.data.length - 1);
    }
    // 私有方法，堆的上浮shiftUp
    _shiftUp(i) {
        while (i > 1 && this.data[this.indexes[this._parent(i)]] < this.data[this.indexes[i]]) {
            this._swap(this.indexes, i, this._parent(i));
            i = this._parent(i);
        }
    }

    _swap(data, i, j) {
        let tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
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
        let res = this.data[this.indexes[0]];

        this._swap(this.indexes, 0, this.data.length - 1);
        this.data.pop();
        this._shiftDown(0);
        return res;
    }
    // 堆的下沉
    _shiftDown(i) {
        while (2 * i + 1 < this.data.length) {  // 有左孩子，完全二叉树中不可能只有右孩子没有左孩子
            let j = 2 * i + 1;  // 在此轮循环中，data[i]和data[j]交换位置
            // 比较左右两个孩子，谁大和谁交换
            if (j + 1 < this.data.length && this.data[this.indexes[j + 1]] > this.data[this.indexes[j]]) {   // 右孩子比左孩子大
                j += 1;
            }
            // 本身的值如果比子节点大，就不用交换break掉
            if (this.data[this.indexes[i]] >= this.data[this.indexes[j]])
                break;
            
            this._swap(this.indexes, i, j);
            i = j;
        }
    }

    extractMaxIndex() {
        let res = this.indexes[0];

        this._swap(this.indexes, 0, this.data.length - 1);
        this.data.pop();
        this._shiftDown(0);
        return res;
    }

    getItem(i) {
        return this.data[i];
    }

    change(i, newItem) {
        this.data[i] = newItem;

        // 找到indexes[j] = i, j 表示data[i]在堆中的位置
        // 之后shiftUp(j),再shiftDown(j)
        // O(n)
        for (let j = 0; j < this.data.length; j++) {
            if (this.indexes[j] === i) {
                this._shiftUp(j);
                this._shiftDown(j);
                return;
            }
        }

    }
}



module.exports = IndexMaxHeap;